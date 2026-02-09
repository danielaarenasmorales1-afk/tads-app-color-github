const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redNum = document.getElementById("redNum");
const greenNum = document.getElementById("greenNum");
const blueNum = document.getElementById("blueNum");

const hexColor = document.getElementById("hexColor");
const colorHex = document.getElementById("colorHex");

function updateFromRange(){
redNum.value = red.value;
greenNum.value = green.value;
blueNum.value = blue.value;
updateColor();
}

function updateFromNumber(){
red.value = redNum.value;
green.value = greenNum.value;
blue.value = blueNum.value;
updateColor();
}

function updateColor(){
const r = red.value;
const g = green.value;
const b = blue.value;

colorHex.style.background = `rgb(${r},${g},${b})`;

const hex =
"#"+
Number(r).toString(16).padStart(2,"0")+
Number(g).toString(16).padStart(2,"0")+
Number(b).toString(16).padStart(2,"0");

hexColor.textContent = hex.toUpperCase();
}

function resetColor(){
red.value=0;
green.value=0;
blue.value=0;
updateFromRange();
}

function randomColor(){
red.value=Math.floor(Math.random()*256);
green.value=Math.floor(Math.random()*256);
blue.value=Math.floor(Math.random()*256);
updateFromRange();
}

red.addEventListener("input",updateFromRange);
green.addEventListener("input",updateFromRange);
blue.addEventListener("input",updateFromRange);

redNum.addEventListener("input",updateFromNumber);
greenNum.addEventListener("input",updateFromNumber);
blueNum.addEventListener("input",updateFromNumber);

updateFromRange();




