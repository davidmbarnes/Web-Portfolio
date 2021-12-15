function mobile() {
    if (window.getComputedStyle(document.getElementById('mobile-menu-unhide')).display === "flex") {
        document.getElementById("hamburger").style.position = "absolute";
        document.getElementById("hamburger").style.bottom = "-100%";
        document.getElementById("mobile-menu-hide").style.bottom = "12vh";
        document.getElementById("mobile-menu-unhide").style.display = "none";
        document.getElementById("mobile-header-section").style.bottom = "0";
        document.getElementById("side-panel").style.left = "-120%";
    } else {
        document.getElementById("mobile-menu-unhide").style.display = "flex"
        document.getElementById("hamburger").style.position = "static";
        document.getElementById("hamburger").style.bottom = "0";
        document.getElementById("no-hamburger").style.bottom = "-100%";
        document.getElementById("mobile-header-section").style.bottom = "-100%";
        document.getElementById("mobile-menu-hide").style.bottom = "-100%";
        document.getElementById("side-panel").style.left = "-85%";
    }
}

function mobilepages() {
    if (window.getComputedStyle(document.getElementById('mobile-menu-unhide')).display === "flex") {
        document.getElementById("hamburger").style.position = "absolute";
        document.getElementById("hamburger").style.bottom = "-100%";
        document.getElementById("mobile-menu-hide").style.bottom = "12vh";
        document.getElementById("mobile-menu-unhide").style.display = "none";
        document.getElementById("mobile-header-section").style.bottom = "0";
    } else {
        document.getElementById("mobile-menu-unhide").style.display = "flex"
        document.getElementById("hamburger").style.position = "static";
        document.getElementById("hamburger").style.bottom = "0";
        document.getElementById("no-hamburger").style.bottom = "-100%";
        document.getElementById("mobile-header-section").style.bottom = "-100%";
        document.getElementById("mobile-menu-hide").style.bottom = "-100%";
    }
}