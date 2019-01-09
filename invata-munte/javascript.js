
function animal(num){
    var audio = document.getElementById("animal"+num.toString())
    audio.play();
}

function stop(num){
    var thissound=document.getElementById("animal"+num.toString());
    thissound.pause();
    thissound.currentTime = 0;
}

window.onload=function(){
    document.getElementById("animal10").play().catch(function() {
        // do something
        document.getElementById("animal10").play()
    });
}


$(document).ready(function() {
    setTimeout(function() {
      $('#row1').show() }, 3500);
    setTimeout(function() {
        $('#row2').show() }, 3500);
    setTimeout(function() {
        var audio = document.getElementById("animal12")
        audio.play();
        }, 4000);
    })