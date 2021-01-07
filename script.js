var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradiant");
var random = document.querySelector(".random");

color1.value="#ff0000";
color2.value="#ffff00";



function changeColor (){
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}
function randomChangeColor(){
	var letters =["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]; //hexadecimal values
	var colorRand = "#";
	var colorRand2 = "#";
	for (i=0; i<6;i++){
		colorRand = colorRand + letters[Math.floor(Math.random() * 16)];
		colorRand2 = colorRand2 + letters[Math.floor(Math.random() * 16)];
	}
	color1.value = colorRand;
	color2.value = colorRand2;

	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";

}

document.addEventListener("DOMContentLoaded", changeColor);

color1.addEventListener("input",changeColor);

color2.addEventListener("input",changeColor);

random.addEventListener("click",randomChangeColor)
