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

var timeLeft = 15 * questions.length

var startbutton = document.querySelector(".startbutton")
// console.log(startbutton)
var currentQuest = 0 
var choices = document.getElementsByClassName("buttons"); 
var choiceButton = document.querySelector("#green")
var timerEl = document.querySelector("#timer")
var questionCont = document.querySelector("#questionCont")
var endGame = document.querySelector("#endGame")
var submitHere = document.querySelector("#submitHere")

// var doc ={
//     children: [],
//     getElementsByClassName: function(params){

//     }
// }
// doc.getElementsByClassName()

function toggleQuest() {
    var quizes = document.querySelector("#see") 
    quizes.innerHTML = questions[currentQuest].question;
    
    console.log(choices)
    for (let i= 0; i< choices.length; i++) {
    console.log(choices[i]);    
    choices[i].innerHTML = questions[currentQuest].answers[i];
    
    }
    
}
// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timeLeft--;
      timerEl.textContent = timeLeft;
      // if (timeLeft >= 0) {
      //   // Tests if win condition is met
      //   if (isWin && timeLeft > 0) {
      //     // Clears interval and stops timer
      //     clearInterval(timer);
      //     winGame();
      //   }
      // }
      // Tests if time has run out
      if (timeLeft <= 0 || currentQuest === questions.length) {
        // Clears interval

        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  }
  function endQuiz() {
      questionCont.style.display = "none"
      endGame.style.display = "block"
      document.getElementById("score").textContent = timeLeft 
  }






startbutton.addEventListener("click", function(){
console.log("horrah")


toggleQuest();

startTimer()


});

choiceButton.addEventListener("click", function(e){
    console.log(e.target.innerHTML)

if (e.target.innerHTML==questions[currentQuest].correctAnswer) {
    console.log("good")
    
} else {
    console.log("bad")
    timeLeft -= 10 


}
 currentQuest+=1

 if ( currentQuest < questions.length) {
 toggleQuest()
}







});

submitHere.addEventListener("click", function(e) {
  localStorage.setItem(document.getElementById("gameTime").value,timeLeft)


})

// 



 // function foo(param1,param2, blah){
    //     console.log(param1);
    //     console.log(param2);
    //     console.log(blah);
    // }
    // var param1 = "Hi"
    // var fooBoo = "World"
    
    // foo(param1, fooBoo, [1,6,67])