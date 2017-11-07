'use strict';

let globalI = 0;

// array containing image file locations
const picArray = ['images/bag.jpg', 'images/banana.jpg', 'images/bathroom.jpg', 'images/boots.jpg', 'images/breakfast.jpg', 
    'images/bubblegum.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dog-duck.jpg', 'images/dragon.jpg', 'images/pen.jpg',
    'images/pet-sweep.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/tauntaun.jpg', 'images/unicorn.jpg',
    'images/usb.gif', 'images/water-can.jpg', 'images/wine-glass.jpg'];

// array to be used in shuffle function    
let myArray = ['0','1','2','3','4','5','6','7','8','9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
        '0', '1', '2', '3'];

// randomizes numbers in an array. by accessing the first three, i get three random ints with no duplicates.
function shuffle(spread) {
    var j, x, i;
    for (i = spread.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = spread[i];
        spread[i] = spread[j];
        spread[j] = x;
    }
    console.log(spread);
}
shuffle(myArray);

// renders three non-dupe random images to the DOM
function tester(source){
    const pics = document.getElementById('imageSpace');
    const img = document.createElement('img');
    img.setAttribute('src', source);
    img.setAttribute('width', '300px');
    img.setAttribute('class', 'pix');
    pics.appendChild(img);
}

// calls render function
for(let i = 0; i < 3; i++){
    tester(picArray[myArray[i]]);
}

// creates event listener
let pict = document.getElementById('imageSpace');
pict.addEventListener('click', clickHandler);
if(globalI >= 20){
    pict.removeEventListener('click', clickHandler);
}

// function to remove item, add new item
function clickHandler(e){
    globalI++;
    console.log(globalI);
    const clickedItem = e.target;
    if(clickedItem.id === 'imageSpace'){
        return;
    }
    clickedItem.remove();
    tester(picArray[myArray[globalI + 3]]);
}