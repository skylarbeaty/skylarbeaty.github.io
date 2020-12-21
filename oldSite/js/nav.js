var menuOpen = 0;
function toggleMenu(){
    if(menuOpen == 1){
    document.getElementById("menu").style.left = "-350px";
    menuOpen = 0;
    }else {
    document.getElementById("menu").style.left = "0px";
    menuOpen = 1;
    }
}