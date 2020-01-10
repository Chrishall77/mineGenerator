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
        countMines(currentRows, currentCols);
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
              cell.setAttribute("mine", "false");
              cell.setAttribute("checked", "false");
          }
        }   
    };

    //randomly generate co-ordinates until mines remaining is 0
    //if mines are higher than total squares then the number of mines is amended to 1 less than locations
    //sets mine attribute for count function to use
    function layMines(r, c, m) {
        let locations = r * c;
        let rowMine = 0;
        let colMine = 0;
        let cell = 0;
        let mines = m >= locations ? locations - 1 : m;
        let minesRemaining = mines;
        while (minesRemaining > 0) {
            rowMine = generateRandom(r);
            colMine = generateRandom(c);
            cell = gridContainer.rows[rowMine].cells[colMine];
            if(cell.getAttribute("mine") == "false"){
                cell.innerHTML="(O)";
                cell.setAttribute("mine", "true");
                minesRemaining = minesRemaining - 1;
            }
        }
    }

    //outer loop traverses entire rows
    //inner loop traverses all columns within
    //set cell - check its mine attribute if false then proceed
    //check the adjacent cells counting all 'true' mine atttributes
    function countMines(r, c) {
        for (let currentRow = 0; currentRow < r; currentRow++) {
            for (let currentCell = 0; currentCell < c; currentCell++) {
                let mineCount=0;
                let cell = gridContainer.rows[currentRow].cells[currentCell];
                if(cell.getAttribute("mine") == "false"){
                    let cellRow = cell.parentNode.rowIndex;
                    let cellCol = cell.cellIndex;
                    for (let adjacentRow = Math.max( cellRow - 1,0) ; adjacentRow <= Math.min( cellRow + 1, r-1) ; adjacentRow++)  {
                        for(let adjacentCell = Math.max( cellCol - 1, 0 ); adjacentCell <= Math.min( cellCol + 1, c-1 ); adjacentCell++ ) {
                            if (gridContainer.rows[adjacentRow].cells[adjacentCell].getAttribute("mine")=="true") mineCount++;
                            mineCount === 0? null : cell.innerHTML = mineCount;
                        }
                    }
                }
            }
        }
    }
    

    //generate a random integer below the max permissable value
    function generateRandom(max) {
        return Math.floor( Math.random() * (max) );
    }

   
    //removes children from gridContainer whilst children exist
    function clearGrid() {
        let element = document.getElementById("gridContainer");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

})(document)