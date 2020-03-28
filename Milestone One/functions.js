// Loads contents first then tells the site what to do after a button is clicked
document.addEventListener('DOMContentLoaded',
function(){
  document.getElementById("quiz_select_submit").onclick =()=>{
    get_api_data('https://my-json-server.typicode.com/sguthrie16/CUS1172_Project_4/db')
    };
  document.getElementById("quiz_one_questions").onclick =()=>{score_tracker(), count = count +1};
  document.getElementById("move_on").onclick =()=>{
    get_api_data('https://my-json-server.typicode.com/sguthrie16/CUS1172_Project_4/db')
    };

  // document.getElementById("quiz_one_questions").onclick = timed_encouragment;
  // document.getElementById("quiz_two_questions").onclick = encouragment;
})
count = 0;
question_type = "";
current_question = "";
number_of_questions = 0;
data = "";
current_score =0;
question_id = "";
answer ="";


// Async await - Getting data from quiz
  let get_api_data = async (api_endpoint) =>{
    results = await fetch(api_endpoint);
    data = await results.json()
      document.getElementById("login").style.display = 'none'
      document.getElementById("encouragment_grid").style.display = 'none'
      document.getElementById("quiz1").style.display = 'block'
      document.getElementById("encouragment").style.display = 'none'
      document.getElementById("explanation").style.display = 'none'
      current_question = data.Questions_Quiz1[count];
      number_of_questions = Object.keys(data.Questions_Quiz1).length;
      question_type = current_question.question_type;
      question_id = current_question.id;
      answer = current_question.correct_answers;
    generate_quiz_one();

}




function generate_quiz_one(){
  for (var i = 0; i <= number_of_questions; i++) {
    if(question_type == "Multiple choice"){
      document.getElementById("quiz_one_questions").innerHTML = `
      <form>
      <h2>${current_question.question}</h2>
        <input type="radio" value = ${current_question.options.optiona} name = ${current_question.options.optiona} onclick= "score_tracker(this.value)">
        <label for=${current_question.options.optiona}> ${current_question.options.optiona}</label><br>
        <input type="radio" value = ${current_question.options.optionb} name = ${current_question.options.optionb} onclick= "score_tracker(this.value)">
        <label for=${current_question.options.optionb}>${current_question.options.optionb}</label><br>
        <input type="radio" value = ${current_question.options.optionc} name = ${current_question.options.optionc} onclick= "score_tracker(this.value)">
        <label for=${current_question.options.optionc}> ${current_question.options.optionc}</label><br>
        <input type="radio" value = ${current_question.options.optiond} name=${current_question.options.optiond} onclick= "score_tracker(this.value)">
        <label>${current_question.options.optiond}</label><br>

      </form>`
    }
    else if (question_type == "TF") {
      document.getElementById("quiz_one_questions").innerHTML = `
      <form>
      <h2>${current_question.question}</h2>
        <input type="radio" value =${current_question.options.optiona} name ="true" onclick= "score_tracker(this.value)">
        <label for="true">${current_question.options.optiona}</label><br>
        <input type="radio" value = ${current_question.options.optionb} name = "false" onclick= "score_tracker(this.value)">
        <label for="false">${current_question.options.optionb}</label><br>
      </form>`
  }
  else if (question_type == "Fill in") {
    document.getElementById("quiz_one_questions").innerHTML = `
    <form>
    <h2>${current_question.question}</h2>
    <input type = "text" placeholder = "answer" id ="fill_in_answer">
    <input type = "submit" value = "submit" id= "submit" onclick = "score_tracker(this.value)">
    </form>`

  }
}

console.log(current_question.id);
console.log(number_of_questions);
return false;
}


function score_tracker(selected_answer){
  if (answer === selected_answer) {
    current_score = current_score + 1;
    document.getElementById("score").innerHTML = `Score: ${current_score}`;
    timed_encouragment();
  }
  else{
    document.getElementById("explanation").style.display = 'block';
    document.getElementById("explanation_desc").innerHTML = `
    <h2>Explanation: ${current_question.explanation}</h2>`;
  }
  if (question_id > number_of_questions) {
    document.getElementById("complete").innerHTML = "<h2> All Done </h2>"
  }
return false;
}

function timed_encouragment(){
    setTimeout(encouragment)
    setTimeout(get_api_data('https://my-json-server.typicode.com/sguthrie16/CUS1172_Project_4/db'), 50000)

}


function encouragment(){
  var encouragment = ["Goodjob", "Well Done", "Keep It Going"]
  var randomEncourgment = encouragment[Math.floor(Math.random()*encouragment.length)];
  document.getElementById("login").style.display = 'none';
  document.getElementById("quiz1").style.display = 'none';
  document.getElementById("quiz2").style.display = 'none';
  document.getElementById("explanation").style.display ='none';
  document.getElementById("encouragment_grid").style.display = 'block';
  document.getElementById("encouragment").innerHTML = randomEncourgment;
return false;
}





















// function chose(){
//   document.getElementById("login").style.display = 'none';
//   if (document.getElementById("quizes").selectedIndex == 0) {
//     generate_quiz_one()
//   }
//   else if (document.getElementById("quizes").selectedIndex == 1) {
//     generate_quiz_two()
//   }
// }
//
//
//


//
//
//
//
//
