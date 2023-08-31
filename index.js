/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let feet;
let liter;
let pound;
let meter;
let gallon;
let kilogram;
window.onload = () => {
  const convrtBtn = document.getElementById("convert-btn");
  const inputVal = document.getElementById("unit-input");
  let lengthP = document.getElementById("length-p");
  let volumP = document.getElementById("vl-p");
  let massP = document.getElementById("ms-p");
  convrtBtn.addEventListener("click", () => {
    let inputVl = inputVal.value;
    feet = inputVl * 3.281;
    meter = inputVl / 3.281;
    gallon = inputVl * 0.264;
    liter = inputVl / 0.264;

    pound = inputVl * 2.204;
    kilogram = inputVl / 2.204;

    lengthP.innerHTML = `${inputVl} meters = ${feet.toFixed(
      3
    )} feet | ${inputVl} feet = ${meter.toFixed(3)} meter `;
    volumP.innerHTML = `${inputVl} liters = ${gallon.toFixed(
      3
    )} gallons | ${inputVl} gallons = ${liter.toFixed(3)} liters `;
    massP.innerHTML = `${inputVl} killos = ${pound.toFixed(
      3
    )} pounds | ${inputVl} pounds = ${kilogram.toFixed(3)} killos `;
  });
};
//
// });
