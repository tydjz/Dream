
$(document).ready(function(){

	$(".nav li").mouseover(function(){
		
		$(this).children().css("color","#fff");
	});
	$(".nav li").mouseleave(function(){
		
		$(this).children().css("color","#888383");
	});
	$(".li1").click(function(){
		$(this).siblings().fadeToggle("slow");
	});
	var images=$("img#i-top");
	var pos=0;
	var len = images.length;
	setInterval(function(){
        images[pos].style.display = 'none';
        pos = ++pos == len ? 0 : pos;
        images[pos].style.display = 'inline';  
    },2000);
});
