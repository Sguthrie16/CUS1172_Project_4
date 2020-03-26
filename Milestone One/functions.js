// Loads contents first then tells the site what to do after a button is clicked
document.addEventListener('DOMContentLoaded',
function(){
  document.getElementById("quiz_select_submit").onclick = chose;

  document.getElementById("quiz_one_questions").onclick = score;
  document.getElementById("quiz_two_questions").onclick = encouragment;
})
let counter = 0;
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
    var input = document.getElementById("#firstname").value
    alert(input);

}

function encouragment(){
  var encouragment = ["Goodjob", "Welldone", "Keep It Going"]
  var randomEncourgment = encouragment[Math.floor(Math.random()*encouragment.length)];
  alert(randomEncourgment);

  // document.getElementById("encouragment").style.display = 'block';
}
