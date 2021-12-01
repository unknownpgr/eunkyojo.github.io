var welcomeText = ["welcome to euna's portfolio!"];
var position = 0; 
var speed = 100;

function typewriter() {
	document.getElementById("welcome-text").innerHTML = welcomeText[0].substring(0, position) + '<span>\u25AE</span>';
	if (position++ != welcomeText[0].length)
	  setTimeout(typewriter, speed);
}
window.addEventListener("load", typewriter)