//Resize To Fit Frame
$(window).on('load, resize',function(){
    playersize();

});

function playersize(){
    $("#zeeplayer").css("height",$("#zeeplayer").width()*0.54596100278552);
}

setTimeout(function(){playersize();},500);

/*
function adjustimg(){
    $("#title img").css({"height":$("#title .row div:first-child img").height(),"width":"100%"});
}
*/

$(document).ready(function(){
  /*   adjustimg(); */ 
    playersize();

});

/*
$(window).resize(function(){
    adjustimg();
});
*/
