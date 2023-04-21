// get references to the input elements and the dummy div
const borderRInput = document.getElementById("borderR");
const borderGInput = document.getElementById("borderG");
const borderBInput = document.getElementById("borderB");
const borderWInput = document.getElementById("borderW");
const backRInput = document.getElementById("backR");
const backGInput = document.getElementById("backG");
const backBInput = document.getElementById("backB");
const dummyDiv = document.getElementById("dummy");

// function to update the border and text colors of the dummy div
function updateColor() {
  const borderR = borderRInput.value;
  const borderG = borderGInput.value;
  const borderB = borderBInput.value;
  const borderW = borderWInput.value;
  const backR = backRInput.value;
  const backG = backGInput.value;
  const backB = backBInput.value;
  
  dummyDiv.style.border = `${borderW}px solid rgb(${borderR}, ${borderG}, ${borderB})`;
  dummyDiv.style.color = `rgb(${backR}, ${backG}, ${backB})`;
}
