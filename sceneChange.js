var scene = [
  document.getElementById('Scene0').style, //0 - home
  document.getElementById('Scene1').style, //1 - how to play
  document.getElementById('Scene2').style, //2 - go to party or stay home?
  document.getElementById('Scene3').style, //3 - go Party
  document.getElementById('Scene4').style, //4 - stay home
  document.getElementById('Scene5').style,
  document.getElementById('Scene6').style,
  document.getElementById('Scene7').style,
  document.getElementById('Scene8').style,
  document.getElementById('Scene9').style,
  document.getElementById('Scene10').style,
]
var currentScene = 0;

function changeSceneTo(s) {
  console.log("ran, recieved: " + s);
  scene[s].display = "block";
  scene[currentScene].display = "none";
  currentScene = s;
}

function restart() {
  if (confirm("Are you sure you want to restart the whole game?")) {
    changeSceneTo(0);
  } else {
    return;
  }
}
