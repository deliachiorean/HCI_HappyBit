
function init() {

  var x = Math.floor((Math.random() * 10) + 1);
	   if(x == 1){
        document.getElementById("img1").src = "antilopa.jpg"
        document.getElementById("img2").src = "pinguin.jpg"
        document.getElementById("img3").src = "ren.jpg"
        document.getElementById("img4").src = "urspolar.jpg"
	   }
	   if(x == 2){
		document.getElementById("img1").src = "morsa.jpg"
        document.getElementById("img2").src = "pinguin.jpg"
        document.getElementById("img3").src = "camila.jpg"
        document.getElementById("img4").src = "urspolar.jpg"
	   }
	   if(x == 3){
		document.getElementById("img1").src = "morsa.jpg"
		document.getElementById("img2").src = "foca.jpg"
		document.getElementById("img3").src = "vulpe.jpg"
		document.getElementById("img4").src = "zebra.jpg"
	   }
	   if(x == 4){
		document.getElementById("img1").src = "iepure.jpg"
        document.getElementById("img2").src = "elefant.jpg"
        document.getElementById("img3").src = "foca.jpg"
        document.getElementById("img4").src = "urspolar.jpg"
	   }
	   if(x == 5){
		document.getElementById("img1").src = "girafa.jpg"
        document.getElementById("img2").src = "pinguin.jpg"
        document.getElementById("img3").src = "iepure.jpg"
        document.getElementById("img4").src = "morsa.jpg"
	   }
	   if(x == 10){
		document.getElementById("img1").src = "leu.jpg"
        document.getElementById("img2").src = "pinguin.jpg"
        document.getElementById("img3").src = "ren.jpg"
        document.getElementById("img4").src = "morsa.jpg"
	   }
	    if(x == 6){
		document.getElementById("img1").src = "urspolar.jpg"
        document.getElementById("img2").src = "pinguin.jpg"
        document.getElementById("img3").src = "tigru.jpg"
        document.getElementById("img4").src = "morsa.jpg"
	   }
	    if(x == 7){
		document.getElementById("img1").src = "ren.jpg"
        document.getElementById("img2").src = "pinguin.jpg"
        document.getElementById("img3").src = "foca.jpg"
        document.getElementById("img4").src = "urs_panda.jpg"
	   }
	    if(x == 8){
		document.getElementById("img1").src = "zebra.jpg"
        document.getElementById("img2").src = "urspolar.jpg"
        document.getElementById("img3").src = "foca.jpg"
        document.getElementById("img4").src = "vulpe.jpg"
	   }
	    if(x == 9){
		document.getElementById("img1").src = "ceva.jpg"
        document.getElementById("img2").src = "vulpe.jpg"
        document.getElementById("img3").src = "pinguin.jpg"
        document.getElementById("img4").src = "morsa.jpg"
	   }
		   
		   
}

function checkFunction(img) {
	 var src = img.src;
	 if(src.includes("ceva.jpg") || src.includes("antilopa.jpg")|| src.includes("camila.jpg")|| src.includes("elefant.jpg") || src.includes("girafa.jpg")|| src.includes("leu.jpg")|| src.includes("tigru.jpg")|| src.includes("urs.jpg")|| src.includes("urs_panda.jpg")|| src.includes("zebra.jpg")){
		text = "<img id='succes' src='happy.png'>";
		document.getElementById('heading1').innerHTML = text;
		show();
		//location.reload();
		setTimeout(() => {hide(); init();}, 2000);
		
	 }
	 else{
		text = "<img id='succes' src='sadface.png'>";
		document.getElementById('heading1').innerHTML = text;
		show();
		setTimeout(() => {hide();}, 2000);
	 }
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function show(){
  // alert("cheked the button - worked");
  document.getElementById("heading1").style.visibility= 'visible' ;
  
}
function hide(){
  // alert("cheked the button - worked");
  document.getElementById("heading1").style.visibility= 'hidden' ;
}
// elsewhere in code
init();