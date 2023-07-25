/*

*/

// handleEnter: handles zipcode searchZip when enter is pressed in the input
function handleEnter(event) {
  if(event.key === 'Enter') {
    searchZip();
  }
}

async function searchZip() {

  // gets zipcode
  const inputZip = document.querySelector('.js-zip-input');
  const zip = inputZip.value;

  // call api here w zip as key
  let zone = await callAPI(zip);
  // display tree info (test w 2 different zipcodes w json data)
  document.querySelector('.js-output-zone')
    .innerHTML = zone;
}

async function callAPI(zip) {
  console.log(`your zip: ${zip}`);
  let result = await getZone(zip);
  console.log(result + 'result');
  return result;
}