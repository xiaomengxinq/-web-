var wrap = document.querySelector(".pic");
var next = document.querySelector(".arrow-right");
var prev = document.querySelector(".arrow-left");
function dotchange () {
    for(var i = 0; i < 5; i++){
        dots[i].className = "";
    }
    dots[index].className = "on";
}
next.onclick = function () {
    next_pic();
}
prev.onclick = function () {
    prev_pic();
}
function next_pic () {
    index++;
    if(index > 4){
        index = 0;
    }
    dotchange();
    var newLeft;
    if(wrap.style.left === "-7380px"){
        newLeft = -2460;
    }else{
        newLeft = parseInt(wrap.style.left)-1230;
    }
    wrap.style.left = newLeft + "px";
}
function prev_pic () {
    index--;
    if(index < 0){
        index = 4;
    }
    dotchange();
    var newLeft;
    if(wrap.style.left === "0px"){
        newLeft = -4920;
    }else{
        newLeft = parseInt(wrap.style.left)+1230;
    }
    wrap.style.left = newLeft + "px";
}
var timer
function autoplay(){
    timer = setInterval(function(){
        next_pic();
    },1000);
}
autoplay();
var container = document.querySelector(".container");
container.onmouseenter = function () {
    clearInterval(timer);
}
container.onmouseleave = function () {
    autoplay();    
}
var index = 0;
var dots = document.getElementsByTagName("span");