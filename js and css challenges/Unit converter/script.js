const inputEl = document.querySelector("#input-el");
const btn = document.querySelector("#convert-btn");

const lengthEl = document.querySelector("#length-el");
const volumeEl = document.querySelector("#volume-el");
const massEl = document.querySelector("#mass-el");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

function convert(unit) {
  if (unit == "meter" || unit == "feet") {
    let mTf = inputValue * meterToFeet;
    mTf = mTf.toFixed(3);
    let fTm = inputValue / meterToFeet;
    fTm = fTm.toFixed(3);
    return `${inputValue} meters = ${mTf} feet | ${inputValue} feet = ${fTm} meters`;
  } else if (unit == "liter" || unit == "gallon") {
    let lTg = inputValue * literToGallon;
    lTg = lTg.toFixed(3);
    let gTl = inputValue / literToGallon;
    gTl = gTl.toFixed(3);
    return `${inputValue} liters = ${lTg} gallons | ${inputValue} gallons = ${gTl} liters`;
  } else if (unit == "kilo" || unit == "pound") {
    let kTp = inputValue * kiloToPound;
    kTp = kTp.toFixed(3);
    let pTk = inputValue / kiloToPound;
    pTk = pTk.toFixed(3);
    return `${inputValue} kilos = ${kTp} pounds | ${inputValue} pounds = ${pTk} kilos`;
  }
}

btn.addEventListener("click", () => {
  inputValue = parseFloat(inputEl.value);
  
  lengthEl.textContent = convert("meter");
  volumeEl.textContent = convert("liter");
  massEl.textContent = convert("kilo");
})

