document.addEventListener('DOMContentLoaded',
function(){
  document.getElementById("quiz_select_submit").onclick = chose;
  document.getElementById("quiz_one_submit").onclick = encouragment;
  document.getElementById("quiz_one_submit").onclick = score;
  document.getElementById("quiz_two_submit").onclick = encouragment;
})

function chose(){
  document.getElementById("login").style.display = 'none';
  if (document.getElementById("quizes").selectedIndex == 0) {
    document.getElementById("quiz1").style.display = 'block';
  }
  else if (document.getElementById("quizes").selectedIndex == 1) {
    document.getElementById("quiz2").style.display = 'block';
  }
}

function score(){
  var counter = 0;
  if (document.getElementById("firstname").value == "Sarah") {
    counter = counter + 1
    document.getElementById("score").innerHTML = `Score: ${counter}`
    alert(counter);
  }
}

function encouragment(){
  var encouragment = ["Goodjob", "Welldone", "Keep It Going"]
  var randomEncourgment = encouragment[Math.floor(Math.random()*encouragment.length)];
  alert(randomEncourgment);

  // document.getElementById("encouragment").style.display = 'block';
}
