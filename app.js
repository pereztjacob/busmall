
let clicks = 0;
let items = [];

/* **********************************   LOCAL STORAGE SECTION   ********************************************
    *********************************************************************
    ********************************************
    ******************************
    ******************
    ******* */

if (localStorage.items) {
    // if we have items in localStorage
    // get them, instantiate them, and put them in our items array
    const itemsArray = JSON.parse(localStorage.items);
    console.log('itemsArray:', itemsArray);
    
    for (let i = 0; i < itemsArray.length; i++) {
        // itemsArray[i] === {type: 'breakfast', src: 'breakfast.png', votes: 1}
        // make sure each item has an updated votes properties
        const item = new Item(itemsArray[i].type, itemsArray[i].src, itemsArray[i].votes);
        items.push(item);
    }
} else {
    // if we don't have stored item:
    // create new items and put them in our items array
    const breakfast = new Item('breakfast', 'images/breakfast.jpg');
    const bag = new Item('bag', 'images/bag.jpg');
    const chair = new Item('chair', 'images/chair.jpg');
    const banana = new Item('banana', 'images/banana.jpg');
    const bathroom = new Item('bathroom', 'images/bathroom.jpg');
    const boots = new Item('boots', 'images/boots.jpg');
    const bubblegum = new Item('bubblegum', 'images/bubblegum.jpg');
    const cthulhu = new Item('cthulhu', 'images/cthulhu.jpg');
    const dogDuck = new Item('dog-duck', 'images/dog-duck.jpg');
    const dragon = new Item('dragon', 'images/dragon.jpg');
    const pen = new Item('pen', 'images/pen.jpg');
    const petSweep = new Item('pet-sweep', 'images/pet-sweep.jpg');
    const scissors = new Item('scissors', 'images/scissors.jpg');
    const shark = new Item('shark', 'images/shark.jpg');
    const sweep = new Item('sweep', 'images/sweep.png');
    const tauntaun = new Item('tauntaun', 'images/tauntaun.jpg');
    const unicorn = new Item('unicorn', 'images/unicorn.jpg');
    const usb = new Item('usb', 'images/usb.gif');
    const waterCan = new Item('water-can', 'images/water-can.jpg');
    const wineGlass = new Item('wine-glass', 'images/wine-glass.jpg');
    
    items = [breakfast, bag, chair, banana, bathroom, boots, bubblegum, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
}

/* ********************
    **************************************
    **************************************************************
    ********************************************************************************** */

// Call to render item
for (let i = 0; i < 3; i ++) {
    appendRandomItem();
}

/* **********************************   CLICK HANDLER SECTION   ********************************************
    *********************************************************************
    ********************************************
    ******************************
    ******************
    ******* */
const game = document.getElementById('game');
game.addEventListener('click', clickHandler);

function clickHandler (e) {
    const clickedItem = e.target;

   // const selector = document.getElementById(game);
    const pagePix = game.querySelectorAll('img');
  //  console.log(pagePix[0].classList);
    pagePix[0].remove();
    pagePix[1].remove();
    pagePix[2].remove();
    console.log(pagePix[0], pagePix[1], pagePix[2]);
    
    if (clickedItem.id === 'game') return; 

    // looping over items array to find the item instance to update
    for (let i = 0; i < items.length; i ++) {
        const itemClass = clickedItem.classList.value;
        if (items[i].type === itemClass) {
            items[i].wasClicked();
        }
    }

    // remove element
    clickedItem.remove();
    
    // render a new element
    for(let i = 0; i < 3; i++){
        appendRandomItem();
    }
    
    // increase number of times clicked and if over 5, call endGame()
    clicks++;
    if (clicks >= 20) {
        endGame();
    }
}

/* ********************
    **************************************
    **************************************************************
    ********************************************************************************** */

// RENDER IMAGES
function appendRandomItem () {
    tempArray = []
    console.log(tempArray);
    const game = document.getElementById('game');

    // runs render once then compares next render to preceeding
    // to prevent duplicates
    do{
        // select random item object from items array, save in randomItem
         const randomItem = items[Math.floor(Math.random() * items.length)];
    
        if(!tempArray.includes(randomItem)){
            const randomItemEle = randomItem.render(); // returns img element
            game.appendChild(randomItemEle);
          //  randomItem.wasDisplayed();
            tempArray.push(randomItem);
        }
    }while(tempArray.length < 1);
}

// stops game after n clicks
// draws chart after n clicks
function endGame () {
    const game = document.getElementById('game');
    game.removeEventListener('click', clickHandler);

    drawChart();
    localStorage.setItem('items', JSON.stringify(items));
}

/* **********************************   CHART SECTION   ********************************************
    *********************************************************************
    ********************************************
    ******************************
    ******************
    ******* */

function drawChart () {
  const itemNames = [];
  const votesData = [];

  for ( let i = 0; i < items.length; i++ ){
      itemNames.push(items[i].type);
      votesData.push(items[i].votes);
  }

  // add a chart
  const chartCanvas = document.getElementById('chart');
  const chartCtx = chartCanvas.getContext('2d');

  const chart = new Chart (
      chartCtx,
      {
          type: 'bar',
          data: {
              labels: itemNames,
              datasets: [
                  {
                      label: 'Number of votes',
                      data: votesData,
                      backgroundColor: 'rgba(255,100,20,1)'
                  }
              ]
          },
          options: {
                title: {
                    display: true,
                    text: 'Votes!!!'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
          }
      }
  );
}

/* ********************
    **************************************
    **************************************************************
    ********************************************************************************** */