$(document).ready(function(){

	$("#slideshow > div:gt(0)").hide();

var buttons = "<button class=\"slidebtn prev\">Prev</button><button class=\"slidebtn next\">Next</button\>";

$("#slideshow").append(buttons);
var interval = setInterval(slide, 3000);

function intslide(func) {
	if (func == 'start') { 
 	interval = setInterval(slide, 3000);
	} else {
		clearInterval(interval);		
		}
}

function slide() {
		tran('next', 0, 1200);
}
	
function tran(a, ix, it) {
        var currentSlide = $('.current');
        var nextSlide = currentSlide.next('.slideitem');
        var prevSlide = currentSlide.prev('.slideitem');
		    var reqSlide = $('.slideitem').eq(ix);// eq: elementul cu indexul

		    
		
        if (nextSlide.length == 0) {
            nextSlide = $('.slideitem').first();
            }

        if (prevSlide.length == 0) {
            prevSlide = $('.slideitem').last();
            }
			
		if (a == 'next') {
			var Slide = nextSlide;
			}
			else if (a == 'prev') {
				var Slide = prevSlide;
				}
				else {
					var Slide = reqSlide;
					}

        currentSlide.fadeOut(it).removeClass('current');
        Slide.fadeIn(it).addClass('current');
    
        
		
    	
}	

$('.next').on('click', function(){
		intslide('stop');						
		tran('next', 0, 400);
		intslide('start');						
	});//next

$('.prev').on('click', function(){
		intslide('stop');						
		tran('prev', 0, 400);
		intslide('start');						
	});//prev


});

document.getElementById("a1").onmouseover = function(){
    document.getElementById("animal1").play();
};
document.getElementById("a2").onmouseover = function(){
    document.getElementById("animal2").play();
};
document.getElementById("a3").onmouseover = function(){
    document.getElementById("animal3").play();
};
document.getElementById("a4").onmouseover = function(){
    document.getElementById("animal4").play();
};
document.getElementById("a5").onmouseover = function(){
    document.getElementById("animal5").play();
};
document.getElementById("a6").onmouseover = function(){
    document.getElementById("animal6").play();
};
document.getElementById("a7").onmouseover = function(){
    document.getElementById("animal7").play();
};
document.getElementById("a8").onmouseover = function(){
    document.getElementById("animal8").play();
};
