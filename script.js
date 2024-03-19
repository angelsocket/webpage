var audio = document.getElementById("audio");
var playBtn = document.getElementById("play-btn");
var pauseBtn = document.getElementById("pause-btn");

playBtn.addEventListener("click", function() {
  audio.play();
});

pauseBtn.addEventListener("click", function() {
  audio.pause();
});
