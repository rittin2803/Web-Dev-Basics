function clickexample(){
	document.getElementById("mouseclick").style.backgroundColor="Grey";
	document.getElementById("mouseclick").innerHTML="Example for Onclick event";
}

function mouseon(){
	document.getElementById("mouseover").style.backgroundColor="Green";
	document.getElementById("mouseover").innerHTML="Mouse on me";
}

function mouseout(){
	document.getElementById("mouseover").style.backgroundColor="Red";
	document.getElementById("mouseover").innerHTML="Mouse not on me";
}

function mouseup(){
	document.getElementById("mousehold").style.backgroundColor="Green";
	document.getElementById("mousehold").innerHTML="Mouse not on me";
}

function mousedown(){
	document.getElementById("mousehold").style.backgroundColor="Red";
	document.getElementById("mousehold").innerHTML="Mouse on me";
}

function dbclickexample(){
	document.getElementById("dbclickex").innerHTML="You double clicked on the above button";
}