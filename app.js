'use strict';

let globalI = 0;

const nameArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen',
    'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

// array containing image file locations
const picArray = ['images/bag.jpg', 'images/banana.jpg', 'images/bathroom.jpg', 'images/boots.jpg', 'images/breakfast.jpg', 
    'images/bubblegum.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dog-duck.jpg', 'images/dragon.jpg', 'images/pen.jpg',
    'images/pet-sweep.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/tauntaun.jpg', 'images/unicorn.jpg',
    'images/usb.gif', 'images/water-can.jpg', 'images/wine-glass.jpg'];

// array to be used in shuffle function    
let myArray = ['0','1','2','3','4','5','6','7','8','9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];

let clickValues = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];

// TODO put item instances in objectArray

// constructor function containing picarray values, indexes, and click values
function item(name, clicks){
    this.name = name;
    this.clicks = clicks;
  ///  this.source = source;
}
let itemZero = new item(nameArray[0], 0);
let itemOne = new item(nameArray[1], 0);
let itemTwo = new item(nameArray[2], 0);
let itemThree = new item(nameArray[3], 0);
let itemFour = new item(nameArray[4], 0);
let itemFive = new item(nameArray[5], 0);
let itemSix = new item(nameArray[6], 0);
let itemSeven = new item(nameArray[7], 0);
let itemEight = new item(nameArray[8], 0);
let itemNine = new item(nameArray[9], 0);
let itemTen = new item(nameArray[10], 0);
let itemEleven = new item(nameArray[11], 0);
let itemTwelve = new item(nameArray[12], 0);
let itemThirteen = new item(nameArray[13], 0);
let itemFourteen = new item(nameArray[14], 0);
let itemFifteen = new item(nameArray[15], 0);
let itemSixteen = new item(nameArray[16], 0);
let itemSeventeen = new item(nameArray[17], 0);
let itemEighteen = new item(nameArray[18], 0);
let itemNineteen = new item(nameArray[19], 0);
let itemTwenty = new item(nameArray[20], 0);

console.log(itemEight.name);

const objectArray = [itemZero, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven, itemEight, itemNine, itemTen,
        itemEleven, itemTwelve, itemThirteen, itemFourteen, itemFifteen, itemSixteen, itemSeventeen, itemEighteen, itemNineteen, itemTwenty];
for(let i = 0; i < 19; i++){
    console.log(objectArray[i]);
}

// randomizes numbers in an array. by accessing the first three, i get three random ints with no duplicates.
function shuffle(spread) {
    var j, x, i;
    for (i = spread.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = spread[i];
        spread[i] = spread[j];
        spread[j] = x;
    }
}
shuffle(myArray);

// renders three non-dupe random images to the DOM
function render(source, name){
    const pics = document.getElementById('imageSpace');
    const img = document.createElement('img');
    img.setAttribute('src', source);
    img.setAttribute('width', '300px');
    img.setAttribute('class', 'pix');
    img.setAttribute('name', name);

    pics.appendChild(img);
}

// calls render function
for(let i = 0; i < 3; i++){
    render(picArray[myArray[i]], nameArray[i]);
}

// creates event listener
let pict = document.getElementById('imageSpace');
pict.addEventListener('click', clickHandler);




/* ***** **** *** ** * REMOVES CLICKED ITEM AND CLICKS++, RENDERS NEW ITEM IN IT'S PLACE * ** *** **** ***** */
/* **** *** ** * ** *** **** ***** **** *** ** * ** *** **** ***** */
/* *** ** * ** *** **** **** *** ** * ** *** **** */
/* ** * ** *** ** * ** *** ** * ** *** */
/* * ** *** **** *** ** */
function clickHandler(e){

    globalI++;

    const clickedItem = e.target;

    if(clickedItem.id === 'imageSpace'){
        globalI--;
        return;
    }

    clickedItem.remove();

    render(picArray[myArray[globalI + 3]], nameArray[myArray[globalI + 3]]);

    if(globalI >= 17){
        pict.removeEventListener('click', clickHandler);
    }

    for(let i = 0; i < objectArray.length; i++){
        // console.log(objectArray[i].name);
        console.log(clickedItem.getAttribute('name'));
        if(objectArray[i].name === clickedItem.getAttribute('name')){
            objectArray[i].clicks++;
            console.log(objectArray[i].clicks);
        }
    }    
}
