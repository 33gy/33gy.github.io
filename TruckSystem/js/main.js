con = false;
function nav() {
    if (con === false){
        document.getElementById("sidebar").style.width = "335px";
        document.getElementById("main").style.marginLeft = "250px";
        con = true
    }
    else{
        document.getElementById("sidebar").style.width = "80px";
        document.getElementById("main").style.marginLeft = "0px";
        con = false
    }
}

