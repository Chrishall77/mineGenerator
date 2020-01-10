((d)=> {
    //initialise DOM elements
    let rows = d.getElementById("rows");
    let cols = d.getElementById("cols");
    let mines = d.getElementById("mines");
    let gridContainer = d.getElementById("gridContainer");
    let submit = d.getElementById("submit");
    

    //on click assign and pass DOM values to variables out to generategrid function
    submit.addEventListener("click", ()=> {
        let currentRows = rows.value;
        let currentCols = cols.value;
        let currentMines = mines.value;
        generateGrid(currentRows, currentCols);
        layMines(currentRows, currentCols, currentMines);
    })

    //clear existing grid
    //outer loop for row creates a TR element
    //inner loop for column creates a TD element
    function generateGrid(r, c) {
        clearGrid();
        for(let i = 0; i < r; i++){ 
          let row = gridContainer.insertRow()
          for(let x = 1; x <= c; x++){ 
              let cell = row.insertCell(); 
              cell.className = "grid";
              cell.innerHTML = "";
          }
        }   
    };

<<<<<<< HEAD
    

=======
   
    //removes children from gridContainer whilst children exist
>>>>>>> master
    function clearGrid() {
        let element = document.getElementById("gridContainer");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

})(document)