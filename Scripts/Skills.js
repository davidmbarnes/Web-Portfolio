var g = document.getElementById('skills');
// var b = document.getElementById("bio").innerHTML;
for (var i = 0, len = g.children.length; i < len; i++) {

    (function (index) {
        g.children[i].onclick = function () {
            document.getElementById("bio").innerHTML = document.getElementsByClassName("skill-description")[index].innerHTML;
        }
    })(i);
}

// function bio() {
//       document.getElementById("bio").innerHTML = b;
// }

// function skill() {
//       b = document.getElementsByClassName("skill-description")[index].innerHTML;
//       document.getElementById("bio").innerHTML = document.getElementsByClassName("skill-description")[index].innerHTML;
// }




// var g = document.getElementById('skills');
// var b = document.getElementById("bio").innerHTML


// function skills() {
// for (var i = 0, len = g.children.length; i < len; i++)
//       if (g.children[i].onmouseover) {
//             document.getElementById("bio").innerHTML = document.getElementsByClassName("skill-description")[index].innerHTML;
//       } else if (g.children[i].onmouseleave) {
//             document.getElementById("bio").innerHTML = b;
//       } else if (g.children[i].onmouseclick) {
//             document.getElementById("bio").innerHTML = document.getElementsByClassName("skill-description")[index].innerHTML;
//       } else {
//             document.getElementById("bio").innerHTML = b;
//       }


// }