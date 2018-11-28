var images=["camila-1.jpg", "camila-2.jpg", "camila-3.jpg", "camila-4.jpg", "camila-5.jpg","cangur-1.jpg", "cangur-2.jpg", "cangur-3.jpg", "cangur-4.jpg", "cangur-5.jpg", "strut-1.jpg", "strut-2.jpg", "strut-3.jpg", "strut-4.jpg", "strut-5.jpg", "antilopa-1.jpg", "antilopa-2.jpg", "antilopa-3.jpg", "antilopa-4.jpg", "antilopa-5.jpg"]

function init(){
	randomNumber = Math.floor(Math.random()*20);
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