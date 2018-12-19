window.onload=function(){
    document.getElementById("my_audio").play().catch(function() {
        // do something
        document.getElementById("my_audio").play()
    });
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