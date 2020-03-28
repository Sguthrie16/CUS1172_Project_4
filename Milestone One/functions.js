// Loads contents first then tells the site what to do after a button is clicked
document.addEventListener('DOMContentLoaded',
function(){
  document.getElementById("quiz_select_submit").onclick =()=>{
    get_api_data('https://my-json-server.typicode.com/sguthrie16/CUS1172_Project_4/db')
    };
  // document.getElementById("quiz_one_questions").onsubmit =()=>{score_tracker(selected_answer), count = count +1};
  document.getElementById("move_on").onclick =()=>{
    get_api_data('https://my-json-server.typicode.com/sguthrie16/CUS1172_Project_4/db')
    };

  // document.getElementById("quiz_one_questions").onclick = timed_encouragment;
  // document.getElementById("quiz_two_questions").onclick = encouragment;
})
count = 0;
question_type = "";
current_question_one = "";
current_question_two ="";
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
      document.getElementById("encouragment_selection").style.display = 'none'
      document.getElementById("quiz1").style.display = 'block'
      document.getElementById("explanation").style.display = 'none'
      current_question_one = data.Questions_Quiz1[count];
      current_question_two = data.Questions_Quiz2[count];
      number_of_questions = Object.keys(data.Questions_Quiz1).length;
      question_type = current_question_one.question_type;
      question_id = current_question_one.id;
      answer = current_question_one.correct_answers;
      if (document.getElementById("quizes").selectedIndex == 0) {
          generate_quiz_one()
        }
        else if (document.getElementById("quizes").selectedIndex == 1) {
          generate_quiz_two()
        }
}




function generate_quiz_one(){
  for (var i = 0; i <= number_of_questions; i++) {
    if(question_type == "Multiple choice"){
      document.getElementById("quiz_one_questions").innerHTML = `
      <form>
      <h2>${current_question_one.question}</h2>
        <input type="radio" value = ${current_question_one.options.optiona} name = ${current_question_one.options.optiona} onclick= "score_tracker(this.value)">
        <label for=${current_question_one.options.optiona}> ${current_question_one.options.optiona}</label><br>
        <input type="radio" value = ${current_question_one.options.optionb} name = ${current_question_one.options.optionb} onclick= "score_tracker(this.value)">
        <label for=${current_question_one.options.optionb}>${current_question_one.options.optionb}</label><br>
        <input type="radio" value = ${current_question_one.options.optionc} name = ${current_question_one.options.optionc} onclick= "score_tracker(this.value)">
        <label for=${current_question_one.options.optionc}> ${current_question_one.options.optionc}</label><br>
        <input type="radio" value = ${current_question_one.options.optiond} name=${current_question_one.options.optiond} onclick= "score_tracker(this.value)">
        <label>${current_question_one.options.optiond}</label><br>

      </form>`
    }
    else if (question_type == "TF") {
      document.getElementById("quiz_one_questions").innerHTML = `
      <form>
      <h2>${current_question_one.question}</h2>
        <input type="radio" value =${current_question_one.options.optiona} name ="true" onclick= "score_tracker(this.value)">
        <label for="true">${current_question_one.options.optiona}</label><br>
        <input type="radio" value = ${current_question_one.options.optionb} name = "false" onclick= "score_tracker(this.value)">
        <label for="false">${current_question_one.options.optionb}</label><br>
      </form>`
  }
  else if (question_type == "Fill in") {
    document.getElementById("quiz_one_questions").innerHTML =`
    <form>
    <h2>${current_question_one.question}</h2>
    <input type="text" id="fill_in_answer">
    <button type="button" onclick = "score_tracker(${document.getElementById("fill_in_answer").value})">Submit</button>
    </form>`
  }
  return false;
}

console.log(current_question_one.id);
console.log(number_of_questions);
return false;
}

function generate_quiz_two(){
  for (var i = 0; i <= number_of_questions; i++) {
    if(question_type == "Multiple choice"){
      document.getElementById("quiz_two_questions").innerHTML = `
      <form>
      <h2>${current_question_one.question}</h2>
        <input type="radio" value = ${current_question_one.options.optiona} name = ${current_question_one.options.optiona} onclick= "score_tracker(this.value)">
        <label for=${current_question_one.options.optiona}> ${current_question_one.options.optiona}</label><br>
        <input type="radio" value = ${current_question_one.options.optionb} name = ${current_question_one.options.optionb} onclick= "score_tracker(this.value)">
        <label for=${current_question_one.options.optionb}>${current_question_one.options.optionb}</label><br>
        <input type="radio" value = ${current_question_one.options.optionc} name = ${current_question_one.options.optionc} onclick= "score_tracker(this.value)">
        <label for=${current_question_one.options.optionc}> ${current_question_one.options.optionc}</label><br>
        <input type="radio" value = ${current_question_one.options.optiond} name=${current_question_one.options.optiond} onclick= "score_tracker(this.value)">
        <label>${current_question_one.options.optiond}</label><br>

      </form>`
    }
    else if (question_type == "TF") {
      document.getElementById("quiz_two_questions").innerHTML = `
      <form>
      <h2>${current_question_one.question}</h2>
        <input type="radio" value =${current_question_one.options.optiona} name ="true" onclick= "score_tracker(this.value)">
        <label for="true">${current_question_one.options.optiona}</label><br>
        <input type="radio" value = ${current_question_one.options.optionb} name = "false" onclick= "score_tracker(this.value)">
        <label for="false">${current_question_one.options.optionb}</label><br>
      </form>`
  }
  else if (question_type == "Fill in") {
    document.getElementById("quiz_two_questions").innerHTML =`
    <form>
    <h2>${current_question_one.question}</h2>
    <input type="text" id="fill_in_answer">
    <button type="button" onclick = "score_tracker(${document.getElementById("fill_in_answer").value})">Submit</button>
    </form>`
  }
  return false;
}

console.log(current_question_one.id);
console.log(number_of_questions);
return false;
}

function score_tracker(selected_answer){
  console.log(selected_answer);
  if (answer === selected_answer) {
      current_score = current_score + 1;
      encouragment();
        }
  else{
    document.getElementById("explanation").style.display = 'block';
    document.getElementById("login").style.display = 'none';
    document.getElementById("explanation_desc").innerHTML = `
    <h2>Explanation: ${current_question_one.explanation}</h2>`;
  }
  count = count +1;
return false;
}




function encouragment(){
  encouragments = ["Goodjob", "Well Done", "Keep It Going"]
  randomEncourgment = encouragments[Math.floor(Math.random()*encouragments.length)];
  document.getElementById("login").style.display = 'none'
  document.getElementById("quiz1").style.display = 'none'
  document.getElementById("quiz2").style.display = 'none'
  document.getElementById("explanation").style.display ='none'
  document.getElementById("encouragment_grid").style.display = 'block'

  document.getElementById("score").innerHTML = `: ${current_score}`;
  setTimeout(get_api_data('https://my-json-server.typicode.com/sguthrie16/CUS1172_Project_4/db'), 100000);

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
