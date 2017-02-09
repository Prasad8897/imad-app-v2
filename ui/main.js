console.log('Loaded!');

//Change the text of the main-text

var element = document.getElementById('main-text');
element.innerHTML="new value";

//Move image
var pok = document.getElementById('madi');
var marginleft=0;
function moveRight(){
	marginleft=marginleft+10;
	img.style.marginLeft = marginleft+'px';
};
pok.onClick = function(){
	var interval = setInterval(moveRight,100);
};