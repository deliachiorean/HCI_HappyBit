var images=["iepure-1.jpg", "iepure-2.jpg","dropie-1.jpg", "dropie-2.jpg", "vulpe-1.jpg", "vulpe-2.jpg", "popandau-1.jpg", "popandau-2.jpg","arici-1.jpg", "arici-2.jpg","dihor-1.jpg", "dihor-2.jpg", "jder-1.jpg", "jder-2.jpg", "soarece-1.jpg", "soarece-2.jpg"]
var score=0;

window.onload=function(){
    document.getElementById("my_audio").play().catch(function() {
        // do something
        document.getElementById("my_audio").play()
    });
}

function init(){
	randomNumber = Math.floor(Math.random()*16);
	let imgj = document.getElementById("imgjoc");
	imgj.src="pictures/"+images[randomNumber];
	imgj.click();
}

init();

function hideok(){
	let imgrez = document.getElementById("imgrezultat");
	imgrez.classList.add("hidden");
	init();
}

function hide(){
	let imgrez = document.getElementById("imgrezultat");
	imgrez.classList.add("hidden");
}

function check(num){
	let imgj = document.getElementById("imgjoc");
	srcjoc = imgj.src
	var cate = srcjoc.charAt(srcjoc.length-5)
	if (cate == num.toString()){
		console.log("Bravo");
		let imgrez = document.getElementById("imgrezultat");
		var audio = document.getElementById("bravo")
		audio.play();
		imgrez.src = "pictures/ok.jpg"
		imgrez.classList.remove("hidden");
		score=score+1;
		document.getElementById('score').innerHTML = "Scor: " + score;
		setTimeout(hideok, 2000);
	}
	else{
		let imgrez = document.getElementById("imgrezultat");
		var audio = document.getElementById("haide")
		audio.play();
		imgrez.src = "pictures/nu.jpg"
		imgrez.classList.remove("hidden");
		setTimeout(hide,2000);
		console.log("Nu");
	}
}

function cifre(num){
	var audio = document.getElementById("a"+num.toString())
	audio.play();
}

function stop(num){
	var thissound=document.getElementById("a"+num.toString());
    thissound.pause();
    thissound.currentTime = 0;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}