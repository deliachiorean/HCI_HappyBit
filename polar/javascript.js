var gasite=0;
var score=0;
var bravo = new Audio('bravo.mp3');
var haide = new Audio('haide.mp3');
var apasat=0;
var imgsrc;
function init() {
    gasite=0;
    var x = Math.floor((Math.random() * 10) + 1);

    apasat=0;

    if (score == 10){
        window.location.replace('./../index.html');
    }



    document.getElementById("img1").style.border="0px"
    document.getElementById("img2").style.border="0px"
    document.getElementById("img3").style.border="0px"
    document.getElementById("img4").style.border="0px"
    document.getElementById("img5").style.border="0px"
    document.getElementById("img6").style.border="0px"

    if(x == 1){
        document.getElementById("img1").src = "arici.jpg"
        document.getElementById("img2").src = "gaina.jpg"
        document.getElementById("img3").src = "vulpe.jpg"
        document.getElementById("img4").src = "peste.jpg"
        document.getElementById("img5").src = "popandaul.jpg"
        document.getElementById("img6").src = "iepure.jpg"
    }
    if(x == 2){
        document.getElementById("img1").src = "catel.jpg"
        document.getElementById("img2").src = "dihore.jpg"
        document.getElementById("img3").src = "iepure.jpg"
        document.getElementById("img4").src = "oaie.jpg"
        document.getElementById("img5").src = "vulpe.jpg"
        document.getElementById("img6").src = "popandaul.jpg"
    }
    if(x == 3){
        document.getElementById("img1").src = "peste.jpg"
        document.getElementById("img2").src = "porc.jpg"
        document.getElementById("img3").src = "nevastuica-cover.jpg"
        document.getElementById("img4").src = "dropia.jpg"
        document.getElementById("img5").src = "arici.jpg"
        document.getElementById("img6").src = "soarece.jpg"
    }
    if(x == 4){
        document.getElementById("img1").src = "vulpe.jpg"
        document.getElementById("img2").src = "soarece.jpg"
        document.getElementById("img3").src = "rata.jpg"
        document.getElementById("img4").src = "dropia.jpg"
        document.getElementById("img5").src = "porc.jpg"
        document.getElementById("img6").src = "dihore.jpg"
    }
    if(x == 5){
        document.getElementById("img1").src = "soarece.jpg"
        document.getElementById("img2").src = "oaie.jpg"
        document.getElementById("img3").src = "peste.jpg"
        document.getElementById("img4").src = "dropia.jpg"
        document.getElementById("img5").src = "dihore.jpg"
        document.getElementById("img6").src = "vulpe.jpg"
    }
    if(x == 10){
        document.getElementById("img1").src = "cal.jpg"
        document.getElementById("img2").src = "iepure.jpg"
        document.getElementById("img3").src = "broasca.jpg"
        document.getElementById("img4").src = "arici.jpg"
        document.getElementById("img5").src = "vulpe.jpg"
        document.getElementById("img6").src = "soarece.jpg"
    }
    if(x == 6){
        document.getElementById("img1").src = "porc.jpg"
        document.getElementById("img2").src = "nevastuica-cover.jpg"
        document.getElementById("img3").src = "dihore.jpg"
        document.getElementById("img4").src = "arici.jpg"
        document.getElementById("img5").src = "peste.jpg"
        document.getElementById("img6").src = "popandaul.jpg"
    }
    if(x == 7){
        document.getElementById("img1").src = "vulpe.jpg"
        document.getElementById("img2").src = "iepure.jpg"
        document.getElementById("img3").src = "soarece.jpg"
        document.getElementById("img4").src = "vaca.jpg"
        document.getElementById("img5").src = "rata.jpg"
        document.getElementById("img6").src = "popandaul.jpg"
    }
    if(x == 8){
        document.getElementById("img1").src = "dropia.jpg"
        document.getElementById("img2").src = "oaie.jpg"
        document.getElementById("img3").src = "popandaul.jpg"
        document.getElementById("img4").src = "vulpe.jpg"
        document.getElementById("img5").src = "catel.jpg"
        document.getElementById("img6").src = "nevastuica-cover.jpg"
    }
    if(x == 9){
        document.getElementById("img1").src = "popandaul.jpg"
        document.getElementById("img2").src = "dihore.jpg"
        document.getElementById("img3").src = "cal.jpg"
        document.getElementById("img4").src = "soarece.jpg"
        document.getElementById("img5").src = "broasca.jpg"
        document.getElementById("img6").src = "nevastuica-cover.jpg"
    }


}

function checkFunction(img) {
    var src = img.src;
    if(src.includes("broasca.jpg") || src.includes("cal.jpg")|| src.includes("catel.jpg")|| src.includes("gaina.jpg") || src.includes("oaie.jpg")|| src.includes("peste.jpg")|| src.includes("porc.jpg")|| src.includes("rata.jpg")|| src.includes("vaca.jpg")){

        if(apasat==1){
            if(imgsrc!=src){

                img.style.border = "5px solid green";

                gasite=gasite+1;
                bravo.play();
                if(gasite===2){
                    score=score+1;
                    document.getElementById('score').innerHTML = "Score: " + score;
                    setTimeout(() => {init();}, 1000);
                }
            }
        }
        if(apasat==0){
            apasat++;
            imgsrc=img.src;
            img.style.border = "5px solid green";

            gasite=gasite+1;
            bravo.play();
            if(gasite===2){
                score=score+1;
                document.getElementById('score').innerHTML = "Score: " + score;
                setTimeout(() => {init();}, 1000);
            }
        }


    }
    else{

        img.style.border = "5px solid red";
        haide.play();
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

function hide(){
    // alert("cheked the button - worked");
    img.style.border="0px"
}
window.onload = function() {
    document.getElementById("my_audio").play();
}
function animal(num){
    document.getElementById("animal"+num.toString()).play();

}
// elsewhere in code
init();