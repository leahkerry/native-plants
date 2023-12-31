const testelem = `{
  "id": 109482,
  "common_name": "Common nettle",
  "slug": "urtica-dioica",
  "scientific_name": "Urtica dioica",
  "year": 1753,
  "bibliography": "Sp. Pl.: 984 (1753)",
  "author": "L.",
  "status": "accepted",
  "rank": "species",
  "family_common_name": null,
  "genus_id": 5550,
  "image_url": "https://bs.plantnet.org/image/o/9db58cbb3538a6b77384f972971d51869228e545",
  "synonyms": [
      "Urtica dioica var. vulgaris",
      "Urtica dioica var. ramosa",
      "Urtica dioica subsp. eudioica"
  ],
  "genus": "Urtica",
  "family": "Urticaceae",
  "links": {
      "self": "/api/v1/species/urtica-dioica",
      "plant": "/api/v1/plants/urtica-dioica",
      "genus": "/api/v1/genus/urtica"
  }
}`;
const obj = JSON.parse(testelem);
console.log(obj.common_name);

const manyElem = `
  [
      {
          "id": 109482,
          "common_name": "Common nettle",
          "slug": "urtica-dioica",
          "scientific_name": "Urtica dioica",
          "year": 1753,
          "bibliography": "Sp. Pl.: 984 (1753)",
          "author": "L.",
          "status": "accepted",
          "rank": "species",
          "family_common_name": null,
          "genus_id": 5550,
          "image_url": "https://bs.plantnet.org/image/o/9db58cbb3538a6b77384f972971d51869228e545",
          "synonyms": [
              "Urtica dioica var. vulgaris",
              "Urtica dioica var. ramosa",
              "Urtica dioica subsp. eudioica"
          ],
          "genus": "Urtica",
          "family": "Urticaceae",
          "links": {
              "self": "/api/v1/species/urtica-dioica",
              "plant": "/api/v1/plants/urtica-dioica",
              "genus": "/api/v1/genus/urtica"
          }
      },
      {
          "id": 227114,
          "common_name": "Barnyard grass",
          "slug": "dactylis-glomerata",
          "scientific_name": "Dactylis glomerata",
          "year": 1753,
          "bibliography": "Sp. Pl.: 71 (1753)",
          "author": "L.",
          "status": "accepted",
          "rank": "species",
          "family_common_name": null,
          "genus_id": 10915,
          "image_url": "https://bs.plantnet.org/image/o/f84a7d4fc2e627ccd451f568479b1932c2b2d900",
          "synonyms": [
              "Bromus glomeratus",
              "Koeleria dactylis",
              "Festuca glomerata",
              "Trachypoa vulgaris",
              "Phalaris glomerata",
              "Limnetis glomerata"
          ],
          "genus": "Dactylis",
          "family": "Poaceae",
          "links": {
              "self": "/api/v1/species/dactylis-glomerata",
              "plant": "/api/v1/plants/dactylis-glomerata",
              "genus": "/api/v1/genus/dactylis"
          }
      }
  ]
  `;

const Arr = JSON.parse(apiArr);
console.log(Arr);
let html = '';
Arr.forEach((plant) => {
  console.log(plant.common_name);
  //html += `<img src="${plant.image_url}">`;
  html += `<div>
            <div>${plant.common_name}</div>
            <img class="plant-image" src="${plant.image_url}"> 
          </div>`
});

document.querySelector('.js-image').innerHTML = html;