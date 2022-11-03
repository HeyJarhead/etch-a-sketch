// create 16 x 16 grid with for loop
const container = document.querySelector('#container');
//container.style.backgroundColor = 'black';
// const item = document.createElement('item');

var chosenRows = 16;
var chosenCols = 16;
function makeGrid(rows,cols){
    for (i = 0; i < (rows * cols); i++){
        item = document.createElement('item');
        item.classList.add('item');
        item.textContent = i + 1;
        //item.style.backgroundColor = 'white';
        item.style.border = '1px solid black';
        container.appendChild(item);
    }
    
}
makeGrid(chosenRows,chosenCols);
function change(){
    document.getElementById("container").innerHTML = "";
    
    var val1;
    var val2;
    do{
        val1 = prompt('Please enter the amount of rows you want: ');
        if(val1 < 1 || val1 > 100){
            alert("That is not valid, please enter a number between 0 and 100");
        }
    }while(val1 < 1 || val1 > 100);
    do{
        val2 = prompt('Please enter the amount of colums you want: ');
        if(val2 < 1 || val2 > 100){
            alert("That is not valid, please enter a number between 0 and 100");
        }
    }while(val2 < 1 || val2 > 100);
    var rowLength = document.querySelector(':root');
    rowLength.style.setProperty('--col', val2);
    const container = document.querySelector('#container');
    makeGrid(val1,val2);
    // chosenRows2 = 2;
    // chosenCols2 = 2;
    // function makeGrid(chosenRows2,chosenCols2);
}
// item.addEventListener('mouseenter',(container) => {
//     item.style.backgroundColor = 'black';
// } )
// item.addEventListener('mouseleave',(container) => {
//     item.style.backgroundColor = 'white';
// })
// function makeGrid(rows,cols){
//     for (i = 0; i < (rows,cols); i++){
//         let square = document.createElement('div');
//         square.classList.add('square');
//         container.appendChild(square);
//     }
// }
// makeGrid(16,16);
// use dom method to create all the squares
// add listener with hover