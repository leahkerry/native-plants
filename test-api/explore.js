//let zip = '19460';
console.log('what zipcode?');
getZone(`19460`);
async function getZone(zip) {
  const url = `https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${zip}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ebf7d61a32msh4b38c08ab1cc7efp188a05jsn8ac4eabb43e3',
      'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    return JSON.parse(result).hardiness_zone;
  } catch (error) {
    console.error(error);
  }
}  