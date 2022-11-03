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
        item.textContent = i;
        //item.style.backgroundColor = 'white';
        item.style.border = '1px solid black';
        container.appendChild(item);
        
    }
    
}
makeGrid(chosenRows,chosenCols);
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