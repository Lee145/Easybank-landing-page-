var btn = document.getElementById("openMenu");
var mobilenav = document.getElementById("mobilenav");

mobilenav.style.left = "-100%";

btn.onclick = function(){
    if(mobilenav.style.left == "-100%"){
        mobilenav.style.left = "50%";
        btn.src = "icon-close.svg";
    }

    else{
        mobilenav.style.left = "-100%";
        btn.src = "icon-hamburger.svg";
    }
}