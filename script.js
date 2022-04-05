console.log("hello world")
// when i click the start button a timer starts and a question is presented.
// when a question is answered another question is presented.
// when a question is answered incorrectly the time is subtracted from the clock.
// WHEN all questions are answered or the timer reaches 0 then the game is over.
// when the game is over, i can save my initials and my score.
 

var questions = [
    {
    question:"what is basic building block language of coding?",
    answers:["word", "excel", "typing", "html"], 
    correctAnswer: "html"
    },
    {
    question:"what does CSS mean?",
    answers:["Cascading Style sheets", "confirmed style subject", "color style sheets", "corona style subject"], 
    correctAnswer: "Cascading Style sheets"
    },   
    {
    question:"what does html mean?",
    answers:["hyper text markup language", "hot top medium language", "hot to manage lists", "hot top markup language"], 
    correctAnswer: "hyper text markup language"
    },    
    {
    question:"what is a dinosaur?",
    answers:["dog", "cat", "horse", "t-Rex"], 
    correctAnswer: "t-Rex"
    },    

]

var startbutton = document.querySelector(".startbutton")
console.log(startbutton)
var currentQuest = 0 
var choices = document.getElementsByClassName("buttons"); 
var choiceButton = document.querySelector("#green")

function toggleQuest() {
    var quizes = document.querySelector("#see") 
    quizes.innerHTML = questions[currentQuest].question;
    
    console.log(choices)
    for (let i= 0; i< choices.length; i++) {
    console.log(choices[i]);    
    choices[i].innerHTML = questions[currentQuest].answers[i];
    
    }
    
}


startbutton.addEventListener("click", function(){
console.log("horrah")
toggleQuest();


});

choiceButton.addEventListener("click", function(e){
    console.log(e.target.innerHTML)

if (e.target.innerHTML==questions[currentQuest].correctAnswer) {
    console.log("good")
    
} else {
    console.log("bad")

}
 currentQuest+=1
 toggleQuest()








});

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }