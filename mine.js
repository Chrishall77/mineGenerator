((d)=> {
    //initialise rows and columns
    let rows = d.getElementById("rows");
    let cols = d.getElementById("cols");
    let submit = d.getElementById("submit");

    submit.addEventListener("click", ()=> {
        console.log("Rows " + rows.value + " Cols " + cols.value);
    })
    
})(document)