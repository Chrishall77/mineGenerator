((d)=> {
    //initialise DOM elements
    let rows = d.getElementById("rows");
    let cols = d.getElementById("cols");
    let mines = d.getElementById("mines");
    let gridContainer = d.getElementById("gridContainer");
    let submit = d.getElementById("submit");
    

    submit.addEventListener("click", ()=> {
        let currentRows = rows.value;
        let currentCols = cols.value;
        let currentMines = mines.value;
        generateGrid(currentRows, currentCols);
    })

    function generateGrid(r, c) {
        clearGrid();
        for(var i = 0; i < r; i++){ 
          var row = document.createElement("div");  
          for(var x = 1; x <= c; x++){ 
              var cell = document.createElement("div"); 
              cell.className = "grid"; 
              cell.innerText = (i * r) + c;
              row.appendChild(cell); 
          } 
          gridContainer.appendChild(row); 
        }   
    };

    function clearGrid() {
        let element = document.getElementById("gridContainer");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

})(document)