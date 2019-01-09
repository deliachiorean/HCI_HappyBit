var scor=sessionStorage.getItem('scor');

window.onload=function(){
    document.getElementById("score_rez").innerHTML="Scor: "+scor;
	if(scor>12){
		document.getElementById("a1").play().catch(function() {
		// do something
		document.getElementById("a1").play()
	});
	}else{
		document.getElementById("a2").play().catch(function() {
		// do something
		document.getElementById("a2").play()
	});
	}
}
