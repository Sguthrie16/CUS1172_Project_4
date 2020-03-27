// Loads contents first then tells the site what to do after a button is clicked
document.addEventListener('DOMContentLoaded',
function(){
  document.getElementById("quiz_select_submit").onclick =()=>{
    get_api_data('https://my-json-server.typicode.com/sguthrie16/CUS1172_Project_4/db')
    generate_quiz_one()
    };
  document.getElementById("quiz_one_questions").onsubmit =timed_encouragment;
  // document.getElementById("quiz_one_questions").onclick = timed_encouragment;
  // document.getElementById("quiz_two_questions").onclick = encouragment;
})
count = 0;
counter =0;
data="";
// Async await - Getting data from quiz
  let get_api_data = async (api_endpoint) =>{
    results = await fetch(api_endpoint);
    data = await results.json()
      document.getElementById("login").style.display = 'none'
      document.getElementById("encouragment_grid").style.display = 'none'
      document.getElementById("quiz1").style.display = 'block'

        current_question = data.Questions_Quiz1[count];
        number_of_questions = Object.keys(data).length;
        generate_quiz_one(data,current_question,number_of_questions);

      // else if (document.getElementById("quiz_select_submit").value == "Quiz2"){
      //   current_question = data.Questions_Quiz2[count];
      //   number_of_questions = Object.keys(data).length;
      //   generate_quiz_two(data,current_question,number_of_questions);
      // }

}
function generate_quiz_one(data,current_question,number_of_questions){
  for (var i = 0; i < number_of_questions; i++) {
    
    if(current_question.question_type == "Multiple choice"){
      document.getElementById("quiz_one_questions").innerHTML = `
        <form>
        <h2>${current_question.question}</h2>
          <input type="radio" value = ${current_question.options.optiona} name = ${current_question.options.optiona}>
          <label for=${current_question.options.optiona}> ${current_question.options.optiona}</label><br>
          <input type="radio" value = ${current_question.options.optionb} name = ${current_question.options.optionb}>
          <label for=${current_question.options.optionb}>${current_question.options.optionb}</label><br>
          <input type="radio" value = ${current_question.options.optionc} name = ${current_question.options.optionc}>
          <label for=${current_question.options.optionc}> ${current_question.options.optionc}</label><br>
          <input type="radio" value = ${current_question.options.optiond} name=${current_question.options.optiond}>
          <label>${current_question.options.optiond}</label><br>
          <input type ="submit" value = "Submit" id="submit">
        </form>`
    }
    else if (current_question.question_type == "TF") {
      document.getElementById("quiz_one_questions").innerHTML = `
        <form>
        <h2>${current_question.question}</h2>
          <input type="radio" value = "true" name = "true">
          <label for="true">True</label><br>
          <input type="radio" value = "false" name = "false">
          <label for="false">False</label><br>
          <input type ="submit" value = "Submit" id="submit">
        </form>`
  }
  else if (current_question.question_type == "Fill in") {
    document.getElementById("quiz_one_questions").innerHTML = `
      <form>
      <h2>${current_question.question}</h2>
      <input type = "text" name = "answer">
      <input type ="submit" value="Submit" id="submit"
      </form>`
  }
  count = count + 1;
}
if(current_question == number_of_questions){
  document.getElementById("quiz_one_questions").innerHTML = "Completes"
}
}

function timed_encouragment(){
    setTimeout(encouragment)
    setTimeout(get_api_data('https://my-json-server.typicode.com/sguthrie16/CUS1172_Project_4/db'), 10000)
return false;
}


function encouragment(){
  var encouragment = ["Goodjob", "Well Done", "Keep It Going"]
  var randomEncourgment = encouragment[Math.floor(Math.random()*encouragment.length)];
  document.getElementById("login").style.display = 'none';
  document.getElementById("quiz1").style.display = 'none';
  document.getElementById("quiz2").style.display = 'none';
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
