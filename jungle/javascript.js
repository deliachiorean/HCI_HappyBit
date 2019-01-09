window.onload=function(){
	document.getElementById("my_audio").play().catch(function() {
			// do something
			document.getElementById("my_audio").play()
	});
}

var nrClick=0;
var firs;
var second;
var match=0;
var cards=[];


function initial(){
		var arrayUsed=new Array(9);
		var num=new Array(16);
	for (var i = 0; i < 9; i++)
  {
    arrayUsed[i] = 0;
  }
	for (var i = 0; i < 16; i++)
  {
    randomNumber = Math.floor(Math.random()*9);
	console.log(randomNumber);
    if ((arrayUsed[randomNumber]==0 || arrayUsed[randomNumber]==1) && randomNumber!=0) 
    {
      arrayUsed[randomNumber]=arrayUsed[randomNumber]+1;
	  num[i]=randomNumber;
    }
    else
    {
      i--;
    }
  }
	for(var i=0;i<16;i++){
		cards[i]="sources/c"+num[i]+".png";
		console.log(cards[i]);
	}
}
initial();

function alegere(card){
	if(nrClick==0)
	{
		first=card;
		document.images[card].src=cards[card];
		nrClick=1;
	}
	else if(nrClick==1)
	{
		nrClick=2;
		second=card;
		document.images[card].src=cards[card];
		timer=setInterval(control,500);
	}
	else{
		alert("you can click on an image once!!1");
	}
}
function control(){
	clearInterval(timer);
	nrClick=0;
	if(cards[first]==cards[second]){
		match++;
		if(match==8)
		var audio = document.getElementById("bravo")
		audio.play();
	}else{
		document.images[first].src="forest.jpg";
		document.images[second].src="forest.jpg";
	}
}


function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}




function animal(num){
	var audio = document.getElementById("animal"+num.toString())
	audio.play();
}

function stop(num){
	var thissound=document.getElementById("animal"+num.toString());
	thissound.pause();
	thissound.currentTime = 0;
}