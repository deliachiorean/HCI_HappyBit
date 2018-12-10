var random_images_array = ["bufnita.svg", "iepure.svg", "cartita.svg", "rata.svg", "sarpe.svg", "broasca.svg"];
var random_images_array2 = ["vulpe.svg", "porc.svg", "soarece.svg", "vaca.svg", "raton.svg", "veverita.svg"];
var score=0;

function startGame(){
	window.location.href = "./game.html";
}


function getRandomImage1(imgAr, path) {
	nr1 = Math.floor(Math.random() * 6);
	console.log(nr1);
	for (i = 0; i <=nr1; i++) {
		path = path || 'images/';
	    var img = imgAr[ nr1 ];
	    var imgStr = '<img src="' + path + img + '" alt = "image">';
	    document.write(imgStr);
	};
};

function getRandomImage2(imgAr, path) {
	nr2 = Math.floor(Math.random() * 6);
	console.log(nr2);
	for (i = 0; i <=nr2; i++) {
		path = path || 'images/';
	    var img = imgAr[ nr2 ];
	    var imgStr = '<img src="' + path + img + '" alt = "image">';
	    document.write(imgStr);
	};
};

function substraction(){
	var result;
	if (nr1 > nr2) {
		result = nr1 - nr2;
	}
	else {
		result = nr2 - nr1;
	}
	return result;
}

function checkAnswer(id){
	result = substraction();
	if (result == id) {
        var audio = new Audio('bravo.mp3');
        audio.play();
        setTimeout(function () { location.reload(true); }, 2000);
	}
	else {
		// var modal = document.getElementById('myModal');
		// var btn = document.getElementById("myBtn");
		// var span = document.getElementsByClassName("close")[0];
		// modal.style.display = "block";
		// span.onclick = function() {
		//     modal.style.display = "none";
		// }
        var audio = new Audio('haide.mp3');
        audio.play();
	}
};

