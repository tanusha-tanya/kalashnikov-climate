const tabTable = document.querySelector('.tab__table');
const dealersTable = document.querySelector('.dealers__show-scroll');
$(window).on("load",function(){
  if(dealersTable){
    $(".dealers__show-scroll").mCustomScrollbar({
      axis:"x",
      theme:"dark",
      disable: false
    });
  }
  if(tabTable){
  function changeScroll(){
    if(window.innerWidth >= 768){
      $(".tab__table").mCustomScrollbar("disable",true);
      $(".table__body").mCustomScrollbar({
        axis:"x",
        theme:"dark",
        disable: false,
        documentTouchScroll: true
      });
    }
    else{
      $(".table__body").mCustomScrollbar("disable",true);
      $(".tab__table").mCustomScrollbar({
        axis:"x",
        theme:"dark",
        disable: false
      });
    }
  }
    changeScroll();

  function cellHeight(){
    let tableColumn = tabTable.querySelectorAll(".table__column"),
      tableCell = tabTable.querySelectorAll(".table__cell"),
      tableRow = tabTable.querySelectorAll(".table__row"),
      rowHeight = [];
      for(let i = 0; i < tableRow.length; i++){
        rowHeight = [];
        for(let j = 0; j < tableColumn.length; j++){
          let ColumnCell = tableColumn[j].querySelectorAll(".table__cell");
          rowHeight.push(ColumnCell[i].clientHeight);
        }
        let cell = tableRow[i].querySelectorAll(".table__cell");
        for (let k = 0; k < cell.length; k++){
          rowHeight.push(cell[k].clientHeight);
        }

        for(let j = 0; j < tableColumn.length; j++){
          let ColumnCell = tableColumn[j].querySelectorAll(".table__cell");
            ColumnCell[i].style.height = Math.max.apply(null,rowHeight) + "px";
        }
        for (let k = 0; k < cell.length; k++){
          cell[k].style.height = Math.max.apply(null,rowHeight)  + "px";
        }
      }
    }
    cellHeight()
    window.addEventListener("resize", function(){
      changeScroll();
      cellHeight();
    });
  }
});
