// example of an array
const homePlantArr = [
  {image: 'source', name: 'oak', description: 'little tree'},
  {image: 'source', name: 'maple', description: 'big tree'}
]

const beachPlantArr = [
  {image: 'source', name: 'beech', description: 'get it??'},
  {image: 'source', name: 'dunes', description: 'honestly i dont know'},
  {image: 'source', name: 'beech', description: 'get it??'}
]

// display current plants
displayPlants('0');
function displayPlants(currentZip) {
  let plantHTML = '';
  let plantArr;
  if(currentZip === `19460`) {
    plantArr = homePlantArr.slice();
  } else if(currentZip === `08008`){
    plantArr = beachPlantArr.slice();
  }
  for(let i=0; i < plantArr.length; i++) {
    const plantObj = plantArr[i];
    const {image, name, description} = plantObj;
    const html = `
      <div class="plant-info-row">
        <div>${image}</div>
        <div>${name}</div>
        <div>${description}</div>
        <button>See more</button>
        <button>Add</button>
      </div>

    `
    plantHTML += html;
  }
  document.querySelector('.js-plant-list')
    .innerHTML = plantHTML;
}


// handleEnter: handles zipcode searchZip when enter is pressed in the input
function handleEnter(event) {
  if(event.key === 'Enter') {
    searchZip();
  }
}

// searchZip: takes input zipcode, sends to api to get info
function searchZip() {

  // gets zipcode
  const inputZip = document.querySelector('.js-zip-input');
  const zip = inputZip.value;


  // TEST: print zipcode in console and html
  console.log(zip);
  const html = `<div>${zip}</div>`
  document.querySelector('.js-zipcode-text')
    .innerHTML = html;
  // send zipcode to api

  // display tree info (test w 2 different zipcodes w json data)
  if(zip === `19460`) {
    displayPlants('19460');
  } else if(zip === `08008`) {
    displayPlants('08008');
  } 
}

