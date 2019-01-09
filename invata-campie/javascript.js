
function animal(num){
    document.getElementById("animal"+num.toString()).play();

}

function stop(num){
    var thissound=document.getElementById("animal"+num.toString());
    thissound.pause();
    thissound.currentTime = 0;
}

window.onload=function(){
    document.getElementById("animal10").play().catch(function() {
        // do something
        document.getElementById("animal10").play();
    });
}
