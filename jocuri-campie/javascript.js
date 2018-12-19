window.onload=function(){
    document.getElementById("my_audio").play().catch(function() {
        // do something
        document.getElementById("my_audio").play()
    });
}

function imagine(num){
    var audio = document.getElementById("img"+num.toString())
    audio.play();
}

function stop(num){
    var thissound=document.getElementById("img"+num.toString());
    thissound.pause();
    thissound.currentTime = 0;
}