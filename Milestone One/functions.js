// // Loads contents first then tells the site what to do after a button is clicked
// document.addEventListener('DOMContentLoaded',
// function(){
//   document.getElementById("quiz_select_submit").onclick = chose;
//   document.getElementById("quiz_one_questions").onclick = timed_encouragment;
//   document.getElementById("quiz_two_questions").onclick = encouragment;
// })
// let counter = 0;
// function chose(){
//   document.getElementById("login").style.display = 'none';
//   document.getElementById("encouragment_grid").style.display = 'none';
//   if (document.getElementById("quizes").selectedIndex == 0) {
//     document.getElementById("quiz1").style.display = 'block';
//   }
//   else if (document.getElementById("quizes").selectedIndex == 1) {
//     document.getElementById("quiz2").style.display = 'block';
//   }
// }
//
// function score(){
//     var input = document.getElementById("#firstname").value
//     alert(input);
// }
// function timed_encouragment(){
//   setTimeout(encouragment, 0000)
//   setTimeout(chose, 3000)
//   return false;
// }
//
// function encouragment(){
//   var encouragment = ["Goodjob", "Well Done", "Keep It Going"]
//   var randomEncourgment = encouragment[Math.floor(Math.random()*encouragment.length)];
//   document.getElementById("login").style.display = 'none';
//   document.getElementById("quiz1").style.display = 'none';
//   document.getElementById("quiz2").style.display = 'none';
//   document.getElementById("encouragment_grid").style.display = 'block';
//   document.getElementById("encouragment").innerHTML = randomEncourgment;
// }

const fetch = require("node-fetch");
async function fetch_users() {
  try{
    const response = await fetch('https://my-json-server.typicode.com/sguthrie16/CUS1172_Project_4/db')
    const result = await response.json()
    console.log(result)
  }catch(err){
    console.error(err);
  }
}
fetch_users()
