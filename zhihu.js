function zantong(){
    document.getElementById("dianzan").style.backgroundColor="blue";
    document.getElementById("dianzan").style.color="white";
    document.getElementById("dianzan").innerHTML="已赞同";
}
function thedropdown(){
    document.getElementsByClassName("dropdown-content").style.display="block"
}
function shoucang(){
    confirm("收藏成功");
    document.getElementById("shoucang").style.color="white";
    document.getElementById("shoucang").style.backgroundColor="blue";
    document.getElementById("shoucang").innerHTML="已收藏";
}
