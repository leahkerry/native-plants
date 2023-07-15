
console.log(beachPlantArr);

// display current plants
// TODO: change to 0 when you are done testing the css
displayPlants('0');
function displayPlants(currentZip) {
  let plantHTML = '';
  let plantArr;
  if(currentZip === `19460`) {
    plantArr = homePlantArr.slice();
  } else if(currentZip === `08008`){
    plantArr = beachPlantArr.slice();
  }

  plantArr.forEach((plant) => {
    //const plantObj = plantArr[i];
    //const {image, name, description} = plantObj;
    const html = `
      <div class="plant-info-row">

        <img class="plant-icon" src=${plant.image}>
        <div class="plant-name">${plant.name}</div>
        <div class="plant-description">${plant.description}</div>
        <button class="see-more-button">See more</button>
        <button class="add-button">Add</button>
      </div>

    `
    plantHTML += html;
  });

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


  // display tree info (test w 2 different zipcodes w json data)
  if(zip === `19460`) {
    displayPlants('19460');
  } else if(zip === `08008`) {
    displayPlants('08008');
  } 
}

