/*function slider () {
const countCurrent =  document.querySelector(".count__amount-current");
const countTotal =  document.querySelector(".count__amount-total");
const countAdd = document.querySelector(".flipping__arrow-right");
const countDeduct = document.querySelector(".flipping__arrow-left");
let currentNum = 1;
let totalNum = 10;

function totalNumber(){
  (totalNum<10)?
  countTotal.textContent = "0" + totalNum:
  countTotal.textContent = totalNum
}
function currentNumber(){
  (currentNum<10)?
  countCurrent.textContent = "0" + currentNum:
  countCurrent.textContent = currentNum;
  if(currentNum >= totalNum){
    disableArrow(countAdd);
  }
  else{
    enableArrow(countAdd)
  }
  if(currentNum <= 1){
    disableArrow(countDeduct);
  }
  else{
    enableArrow(countDeduct)
  }
}

function disableArrow(btn){
  btn.classList.add("disabled");
  return
}
function enableArrow(btn){
  btn.classList.remove("disabled");
  return
}
countAdd.onclick = function(){
  if(currentNum >= totalNum){
    disableArrow(this);
  }
  else{
  enableArrow(this);
  currentNum++;
  currentNumber();
  }
}
countDeduct.onclick = function(){
  if(currentNum <= 1){
    disableArrow(this);
  }
  else{
  enableArrow(this);
  currentNum--;
  currentNumber();
  }
}
totalNumber()
}
if (document.querySelector(".slider")){
  slider();
}*/
function lerp(a, b, n) {
    return (1 - n) * a + n * b
}


// Slider
class Slider {
  constructor(options = {}) {
    this.bind()

    this.opts = {
      el: options.el || '.slider',
      ease: options.ease || 0.1,
      speed: options.speed || 1,
      scroll: options.scroll || false
    }

    this.slider = document.querySelector(this.opts.el)
    this.sliderInner = this.slider.querySelector('.slider__items')
    this.slides = [...this.slider.querySelectorAll('.slider__item')]
    this.slidesNumb = this.slides.length

    this.rAF = undefined

    this.sliderWidth = 0

    this.onX = 0
    this.offX = 0

    this.currentX = 0
    this.lastX = 0

    this.min = 0
    this.max = 0
  }

  bind() {
    ['setPos', 'run', 'on', 'off', 'resize'].forEach((fn) => this[fn] = this[fn].bind(this))
  }

  setBounds() {
    const slideWidth = this.slides[0].getBoundingClientRect().width

    this.sliderWidth = this.slidesNumb * slideWidth
    this.max = -(this.sliderWidth - window.innerWidth)

    this.slides.forEach((slide, index) => {
      slide.style.left = `${index * slideWidth}px`
    })
  }

  setPos(e = e || window.event) {
    this.currentX = this.offX + ((e.clientX - this.onX) * this.opts.speed)
    this.currentX = Math.max(Math.min(this.currentX, this.min), this.max)
  }

  run() {
    this.lastX = lerp(this.lastX, this.currentX, this.opts.ease)
    this.lastX = Math.floor(this.lastX * 100) / 100

    this.sliderInner.style.transform = `translate3d(${this.lastX}px, 0, 0)`

    this.rAF = requestAnimationFrame(this.run)
  }

  on(e = e || window.event) {
    this.onX = e.clientX

    this.slider.classList.add('is-grabbing')

    this.slider.addEventListener('mousemove', this.setPos, false)
  }

  off(e = e || window.event) {
    const newX = this.offX + ((e.clientX - this.onX) * this.opts.speed)

    this.offX = newX >= 0 ? 0 : newX <= this.max ? this.max : newX

    this.slider.classList.remove('is-grabbing')

    this.slider.removeEventListener('mousemove', this.setPos, false)
  }

  requestAnimationFrame() {
    this.rAF = requestAnimationFrame(this.run)
  }

  cancelAnimationFrame() {
    cancelAnimationFrame(this.rAF)
  }

  addEvents() {
    this.requestAnimationFrame()

    this.slider.addEventListener('mousedown', this.on, false)
    this.slider.addEventListener('mouseup', this.off, false)

    window.addEventListener('resize', this.resize, false)
  }

  removeEvents() {
    this.cancelAnimationFrame(this.rAF)

    this.slider.removeEventListener('mousedown', this.on, false)
    this.slider.removeEventListener('mouseup', this.off, false)
  }

  resize() {
    this.setBounds()
  }

  destroy() {
    this.removeEvents()

    this.opts = {}
  }

  init() {
    this.setBounds()
    this.addEvents()
  }
}

class Effect extends Slider {
  run() {
    super.run()

    const sd = this.currentX - this.lastX
    const acc = sd / window.innerWidth
    let velo =+ acc
    velo = Math.abs(velo)
    velo = 1 + (-velo * 0.5)

    this.sliderInner.style.transform = `translate3d(${this.lastX}px, 0, 0) scaleY(${velo})`
  }
}

const slider = new Effect({
  el: '.slider',
  speed: 1.5
})

slider.init()
