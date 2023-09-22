function bio_box() {

  const html = `
    <p>&#x2022 Native plants attract crucial pollinators such as bees, butterflies, beetles, and bats.</p>
    <p> &#x2022  PA faces many threats, such as deforestation, invasive species, deer herbivory, pollution, and over collecting so, native plants help to combat this habitat destruction</p>

    <style>
      #power-info {
        border-color: #739055;
        padding: 30px 50px;
      }
    </style>
  `;
  document.getElementById("power-info").innerHTML = html; 
  // = `<div id="power-info">hello</div>`;
}

function combat_box() {

  const html = `
    <p>&#x2022 Natives (like oak and maples) are more effective at storing c02</p>
    <p> &#x2022 Native plantscapes don't require mowing- meaning less co2 emissions </p>
    <p> &#x2022 Because of their durability in the climate, they also require less watering </p>
    <style>
      #power-info {
        border-color: #7CC8C8;
        padding: 30px;
      }
      
    </style>
  `;
  document.getElementById("power-info").innerHTML = html; 
  // = `<div id="power-info">hello</div>`;
}

function durable_box() {

  const html = `
      <div id="top"><p>Since native plants have adapted to local climate, they will survive through harsh weather conditions like frost and drought.
      Because of this, natural landscapes require</p></div>
    <img src="../images/flowericon.png" id = "flower1">
    <div id="bullets"><p>&#x2022 less chemicals <br>&#x2022 less upkeep<br>&#x2022 less water<br>&#x2022 less money</p></div>
    <img src="../images/flowericon.png" id = "flower2">
    <div id="bottom"><p>Making them a great option for you and the environment!</p></div>

    <style>
        #power-info{
          grid-column: 1 / 13;
          display: grid;
          background: #FFF6EB;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, minmax(10px, auto));
          justify-items: center;
          align-items: end;
          border: 20px solid #71AAB2;
        }
    </style>
  `;
  document.getElementById("power-info").innerHTML = html; 
  // = `<div id="power-info">hello</div>`;
}