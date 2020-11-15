con = false;
function nav() {
    if (con == false){
        document.getElementById("sidenav").style.width = "250px";
        document.getElementById("main-container").style.left = "250px";
        document.getElementById("header").style.left = "250px";
        document.getElementById("content-container").style.left = "250px";
        con = true
    }
    else{
        document.getElementById("sidenav").style.width = "80px";
        document.getElementById("main-container").style.left = "80px";
        document.getElementById("header").style.left = "80px";
        document.getElementById("content-container").style.left = "80px";
        con = false
    }
}