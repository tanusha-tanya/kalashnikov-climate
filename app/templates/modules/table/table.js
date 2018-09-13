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
  window.addEventListener("resize", function(){
    changeScroll();
  });

  let tableColumn = tabTable.querySelectorAll(".table__column"),
      tableCell = tabTable.querySelectorAll(".table__cell"),
      tableRow = tabTable.querySelectorAll(".table__row"),
      cell, rowHeight, columnHeight, largeHeight;
      for(let i = 0; i <= tableRow.length; i++){
        for (let j = 0; j < tableColumn.length; j++){
          let ColumnCell =  tableColumn[j].querySelectorAll(".table__cell");
          let height = ColumnCell[i].scrollHeight;
          heightDetected(height);
          columnHeight = height;
        }
        cell = tableRow[i].querySelectorAll(".table__cell");
        for (let j = 0; j < cell.length; j++){
          let height = cell[j].scrollHeight;
          heightDetected(height);
          rowHeight = height;
        }
        function heightDetected(height){
          let lowHeight = 0;
          (height <= lowHeight)? height = lowHeight: lowHeight = height;
          return height
        }
        (rowHeight <= columnHeight)? largeHeight = columnHeight: largeHeight = rowHeight;
        console.log(largeHeight)
        for (let j = 0; j < tableColumn.length; j++){
          let ColumnCell =  tableColumn[j].querySelectorAll(".table__cell");
          ColumnCell[i].style.height = largeHeight + "px";
        }
        for (let j = 0; j < cell.length; j++){
           cell[j].style.height = largeHeight + "px";
        }
    }
  }
});
