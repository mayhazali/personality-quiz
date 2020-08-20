//Global Variables
var questionCount = 0;

var batScore = 0;
var butterflyScore = 0;
var dragonScore = 0;
var pandaScore = 0;
var serpantScore = 0;

// Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");
var result = document.getElementById("result");
var retake = document.getElementById("retake");

// Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", bat);
q1a2.addEventListener("click", butterfly);
q1a3.addEventListener("click", dragon);
q1a4.addEventListener("click", panda);
q1a5.addEventListener("click", serpant);
q2a1.addEventListener("click", bat);
q2a2.addEventListener("click", butterfly);
q2a3.addEventListener("click", dragon);
q2a4.addEventListener("click", panda);
q2a5.addEventListener("click", serpant);
q3a1.addEventListener("click", bat);
q3a2.addEventListener("click", butterfly);
q3a3.addEventListener("click", dragon);
q3a4.addEventListener("click", panda);
q3a5.addEventListener("click", serpant);
q4a1.addEventListener("click", bat);
q4a2.addEventListener("click", butterfly);
q4a3.addEventListener("click", dragon);
q4a4.addEventListener("click", panda);
q4a5.addEventListener("click", serpant);
retake.addEventListener("click", restart);

q1a1.addEventListener("click", dq1a1);
q1a2.addEventListener("click", dq1a2);
q1a3.addEventListener("click", dq1a3);
q1a4.addEventListener("click", dq1a4);
q1a5.addEventListener("click", dq1a5);
q2a1.addEventListener("click", dq2a1);
q2a2.addEventListener("click", dq2a2);
q2a3.addEventListener("click", dq2a3);
q2a4.addEventListener("click", dq2a4);
q2a5.addEventListener("click", dq2a5);
q3a1.addEventListener("click", dq3a1);
q3a2.addEventListener("click", dq3a2);
q3a3.addEventListener("click", dq3a3);
q3a4.addEventListener("click", dq3a4);
q3a5.addEventListener("click", dq3a5);
q4a1.addEventListener("click", dq4a1);
q4a2.addEventListener("click", dq4a2);
q4a3.addEventListener("click", dq4a3);
q4a4.addEventListener("click", dq4a4);
q4a5.addEventListener("click", dq4a5);

// disabling functions
function dq1a1() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
  document.getElementById("q1a5").disabled = true;
}

function dq1a2() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
  document.getElementById("q1a5").disabled = true;
}

function dq1a3() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
  document.getElementById("q1a5").disabled = true;
}

function dq1a4() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
  document.getElementById("q1a5").disabled = true;
}

function dq1a5() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
  document.getElementById("q1a5").disabled = true;
}

function dq2a1() {
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
  document.getElementById("q2a4").disabled = true;
  document.getElementById("q2a5").disabled = true;
}

function dq2a2() {
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
  document.getElementById("q2a4").disabled = true;
  document.getElementById("q2a5").disabled = true;
}

function dq2a3() {
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
  document.getElementById("q2a4").disabled = true;
  document.getElementById("q2a5").disabled = true;
}

function dq2a4() {
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
  document.getElementById("q2a4").disabled = true;
  document.getElementById("q2a5").disabled = true;
}

function dq2a5() {
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
  document.getElementById("q2a4").disabled = true;
  document.getElementById("q2a5").disabled = true;
}

function dq3a1() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
  document.getElementById("q3a4").disabled = true;
  document.getElementById("q3a5").disabled = true;
}

function dq3a2() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
  document.getElementById("q3a4").disabled = true;
  document.getElementById("q3a5").disabled = true;
}

function dq3a3() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
  document.getElementById("q3a4").disabled = true;
  document.getElementById("q3a5").disabled = true;
}

function dq3a4() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
  document.getElementById("q3a4").disabled = true;
  document.getElementById("q3a5").disabled = true;
}

function dq3a5() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
  document.getElementById("q3a4").disabled = true;
  document.getElementById("q3a5").disabled = true;
}

function dq4a1() {
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
  document.getElementById("q4a4").disabled = true;
  document.getElementById("q4a5").disabled = true;
}

function dq4a2() {
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
  document.getElementById("q4a4").disabled = true;
  document.getElementById("q4a5").disabled = true;
}

function dq4a3() {
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
  document.getElementById("q4a4").disabled = true;
  document.getElementById("q4a5").disabled = true;
}

function dq4a4() {
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
  document.getElementById("q4a4").disabled = true;
  document.getElementById("q4a5").disabled = true;
}

function dq4a5() {
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
  document.getElementById("q4a4").disabled = true;
  document.getElementById("q4a5").disabled = true;
}

// Define quiz functions here
function bat(){
  batScore+=1;
  questionCount+=1;
  //alert("One Point to bat!");
  
  if (questionCount>=4) {
    updateResult();
  }
}

function butterfly(){
  butterflyScore+=1;
  questionCount+=1;
  //alert("One Point to butterfly!");
  
  if (questionCount>=4) {
    updateResult();
  }
}

function dragon(){
  dragonScore+=1;
  questionCount+=1;
  //alert("One Point to dragon!");
  
  if (questionCount>=4) {
    updateResult();
  }
}

function panda(){
  pandaScore+=1;
  questionCount+=1;
  //alert("One Point to panda!");
  
  if (questionCount>=4) {
    updateResult();
  }
}

function serpant(){
  serpantScore+=1;
  questionCount+=1;
  //alert("One Point to sea serpant!");
  
  if (questionCount>=4) {
    updateResult();
  }
}

//These funtions calculate the result animal
function updateResult(){
  if (batScore>=2) {
    result.innerHTML = "Congratulations, you are a dark and mysterious bat." + "<br />";
  var batPic = document.createElement("img"); 
    batPic.src = "https://cdn.glitch.com/85101325-54a5-472d-aca1-607e3de47239%2FBlackbat.jpg?v=1597351266777"; 
    batPic.width = 600;
    batPic.className = "Pic";
    result.appendChild(batPic);
  }
  
  else if (butterflyScore>=2) {
    result.innerHTML = "Congratulations, you are a delicate butterfly." + "<br />";
  var butterflyPic = document.createElement("img"); 
    butterflyPic.src = "https://cdn.glitch.com/85101325-54a5-472d-aca1-607e3de47239%2FColorfulbutterfly.jpg?v=1597351278222"; 
    butterflyPic.width = 400;
    butterflyPic.className = "Pic";
    result.appendChild(butterflyPic);
  }
  else if (dragonScore>=2) {
    result.innerHTML = "Congratulations, you are a fierce and ferocious dragon." + "<br />";
  var dragonPic = document.createElement("img"); 
    dragonPic.src = "https://cdn.glitch.com/85101325-54a5-472d-aca1-607e3de47239%2Fdragonpic.png?v=1597351285107"; 
    dragonPic.width = 600;
    dragonPic.className = "Pic";
    result.appendChild(dragonPic);
  }
  else if (pandaScore>=2) {
    result.innerHTML = "Congratulations, you are a cute and cuddly panda." + "<br />";
  var pandaPic = document.createElement("img"); 
    pandaPic.src = "https://cdn.glitch.com/85101325-54a5-472d-aca1-607e3de47239%2FSleepypanda.jpg?v=1597351300241";
    pandaPic.width = 600;
    pandaPic.className = "Pic";
    result.appendChild(pandaPic);
  }
  else if (serpantScore>=2) {
    result.innerHTML = "Congratulations, you are a mighty sea serpant." + "<br />";
  var serpantPic = document.createElement("img"); 
    serpantPic.src = "https://cdn.glitch.com/85101325-54a5-472d-aca1-607e3de47239%2FSeaserpant.jpg?v=1597353743382";
    serpantPic.width = 600;
    serpantPic.className = "Pic";
    result.appendChild(serpantPic);
  }
  else {
    result.innerHTML = "Congratulations, you've tied for all the animals. You're a Unicorn!" + "</ br>";
  var uniPic = document.createElement("img"); 
    uniPic.src = "https://cdn.glitch.com/85101325-54a5-472d-aca1-607e3de47239%2FUni.jpg?v=1597351537411";
    uniPic.width = 600;
    uniPic.className = "Pic";
    result.appendChild(uniPic);
  }
}

//This function allows the user to restart the quiz
function restart() {
  result.innerHTML = "Your result is... ";
  questionCount = 0;
  batScore = 0;
  butterflyScore = 0;
  dragonScore = 0;
  pandaScore = 0;
  serpantScore = 0;
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q2a3").disabled = false;
  document.getElementById("q3a3").disabled = false;
  document.getElementById("q4a3").disabled = false;
  document.getElementById("q1a4").disabled = false;
  document.getElementById("q2a4").disabled = false;
  document.getElementById("q3a4").disabled = false;
  document.getElementById("q4a4").disabled = false;
  document.getElementById("q1a5").disabled = false;
  document.getElementById("q2a5").disabled = false;
  document.getElementById("q3a5").disabled = false;
  document.getElementById("q4a5").disabled = false;
}