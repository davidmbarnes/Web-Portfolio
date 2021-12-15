// Hide scrollbar & navbar on click (5th button on sidebar) -- Begin code

function Hide() {
  if (window.matchMedia("(min-width: 701px)").matches && document.getElementById("side-panel").style.left >= "0") {
    document.getElementById("side-panel").style.left = "-2.5%";
    document.getElementById("header").style.top = "-50px";
    document.getElementById("side-panel-hide").innerHTML = "SHOW";
  } else if (window.matchMedia("(min-width: 701px)").matches && document.getElementById("side-panel").style.left <= "0") {
    document.getElementById("side-panel").style.left = "0";
    document.getElementById("header").style.top = "0";
    document.getElementById("side-panel-hide").innerHTML = "HIDE";
  } else if (window.matchMedia("(max-width: 700px)").matches && document.getElementById("side-panel").style.left < "0") {
    document.getElementById("side-panel").style.left = "0";
    document.getElementById("expand").style.transform = "rotate(0deg)";
  } else if (window.matchMedia("(max-width: 700px)").matches && document.getElementById("side-panel").style.left > "-80%") {
    document.getElementById("side-panel").style.left = "-85%";
    document.getElementById("expand").style.transform = "rotate(180deg)";
  }
}

// Hide scrollbar & navbar -- End code


// Styling for drawers within sidebar. Expands drawers out on hover -- Begin Code

var g = document.getElementById('expand-img-wrapper');
for (var i = 0, len = g.children.length; i < len; i++) {

  (function (index) {
    g.children[i].onmouseover = function () {
      document.getElementsByClassName("expand")[index].classList.add("expandjs");
    }
  })(i);
}

for (var i = 0, len = g.children.length; i < len; i++) {

  (function (index) {
    g.children[i].onmouseleave = function () {
      document.getElementsByClassName("expand")[index].classList.remove("expandjs");
    }
  })(i);
}

// Styling for drawers within sidebar. Expands drawers out on hover -- End Code