function bio_box() {
  console.log(`box  clicked`);
  const html = `
    <p>&#x2022 Native plants attract crucial pollinators such as bees, butterflies, beetles, and bats.</p>
    <p> &#x2022  PA faces many threats, such as deforestation, invasive species, deer herbivory, pollution, over collecting<\p>
    <p> so, native plants help to combat this habitat destruction<\p>
  `;
  document.getElementById("power-info").innerHTML = html; 
  // = `<div id="power-info">hello</div>`;
}

function combat_box() {
  console.log(`box clicked`);
  const html = `
    <p>&#x2022 natives (like oak and maples) are more effective at storing c02</p>
    <p> &#x2022 native plantscapes don't require mowing- meaning less co2 emissions <\p>
  `;
  document.getElementById("power-info").innerHTML = html; 
  // = `<div id="power-info">hello</div>`;
}

function durable_box() {
  console.log(`box clicked`);
  const html = `
      <div id="top"><p>Since native plants have adapted to local climate, they will survive through harsh weather conditions like frost and drought.
      Because of this, natural landscapes require</p></div>
    <img src="../images/flowericon.png" id = "flower1">
    <div id="bullets"><p>&#x2022 less chemicals <br>&#x2022 less upkeep<br>&#x2022 less water<br>&#x2022 less money</p></div>
    <img src="../images/flowericon.png" id = "flower2">
    <div id="bottom"><p>Making them a great option for you and the environment!</p></div>
  `;
  document.getElementById("power-info").innerHTML = html; 
  // = `<div id="power-info">hello</div>`;
}