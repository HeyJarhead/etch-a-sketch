// create 16 x 16 grid with for loop
const container = document.querySelector('#container');
container.style.backgroundColor = 'black';
var chosenRows = 16;
var chosenCols = 16;
function makeGrid(rows,cols){
    for (i = 0; i < (rows * cols); i++){
        let item = document.createElement('item');
        item.classList.add('item');
        item.textContent = i;
        item.style.backgroundColor = 'green';
        container.appendChild(item);
        console.log(i);
    }
}
makeGrid(chosenRows,chosenCols);
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