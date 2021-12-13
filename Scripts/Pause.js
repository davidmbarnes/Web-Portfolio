function Pause() {
  if (document.getElementById("backgroundVid").paused) {
    document.getElementById("backgroundVid").play();
    document.getElementById("resume").style.display = "none";
    document.getElementById("pause").style.display = "block";
    document.getElementById("play").innerHTML = "PAUSE";
  } else {
    document.getElementById("backgroundVid").pause();
    document.getElementById("pause").style.display = "none";
    document.getElementById("resume").style.display = "block";
    document.getElementById("play").innerHTML = "PLAY";
  }
}