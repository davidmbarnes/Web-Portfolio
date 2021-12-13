function unhide() {
    if (document.getElementById("header").style.top = "-50px") {
        document.getElementById("header").style.top = "0";

    }
}

function hide() {
    if (document.getElementById("header").style.top = "0") {
        document.getElementById("header").style.top = "-50px";

    }
}

var navhide = document.querySelector('#bio').offsetTop;

window.onscroll = function () {
    if (window.pageYOffset > navhide) {
        document.getElementById("header").style.top = "-50px";
        document.getElementById("unhide").style.display = "block";
    } else {
        document.getElementById("header").style.top = "0";
        document.getElementById("unhide").style.display = "none";
    }
}