var startButton = document.getElementById('startBtn')
var correctBtn = document.querySelector("#right")
var questionContainer =  document.querySelector("#questionContainer")
const listOfIncorrectBtns = document.querySelectorAll("#wrong")

startButton.addEventListener("click", myTimer)
startButton.addEventListener("click", ()=>{
    startButton.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    
});
correctBtn.addEventListener("click", ()=>{
    alert("Yay");
});

function myTimer(){/*Timer function*/
    var durationSeconds = 120;

    function startTimer(){
        var timer = setInterval(function() {

            durationSeconds--;

            document.getElementById('timer').innerHTML = durationSeconds;
                
            //calculate timer interval by each second that passes, returns "EXPIRED" when timer runs out*/
            if(durationSeconds < 0){
                clearInterval(timer);
                alert("Time is up!")
                //end game
            }    
        }, 1000); /*Update the countdown every 1 second, 1000 = 1000miliseconds = 1second*/
    }

    for(let i = 0; i < listOfIncorrectBtns.length; i++)
    {
        listOfIncorrectBtns[i].addEventListener("click", decrementTimer);
        listOfIncorrectBtns[i].addEventListener("click", ()=>{
            console.log("Nay");
        });
    }

    function decrementTimer() {
        durationSeconds -= 10;
        document.getElementById('timer').innerHTML = durationSeconds;
    };

    startTimer();
};

// var nextBtn= document.querySelector("#nextBtn")

// nextBtn.addEventListener("click", newCard);

// function nextQuestion(){

// }

// var questionEl = document.getElementById("question")
// var questionBtns = document.getElementById("questionBtns")



// function presentQuestion(){
//     questionEl.innerText = question.question
//     questionBtns.answers.forEach(answer =>{
//         var button = document.createElement("button"
//         button.innerText = answer.text
//         button.classList.add("btn")
//         if (answer.correct ){
//             button.dataset.correct= answer.correct
//         }
//         button.addEventListener("click", selection)
//         answerBtn.appendChild(button)

//     })
// }   

// function selection
//     var selected= e.target
//     const correct = selected. dataset. correct
// Array.from(answerBtn. children).forEach(button => {
//     setStatusClass(button, button.dataset. correct)
// })
// }

// function setStatusClass(element, correct){
//     clearStatusClass(element)
//     if (correct){
//         element.classList.add("correct")
//     }   else
//         element.classList.add("wrong")
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove("correct")
//     element.classList.remove("wrong")
// }
// }


// var questions = [
//  {
//     question: "beeeboopop",
//     answers: [
//             {text:"beep", correct:true}
//             {text:"boop", correct:false}
//         ] 
//     }
// ]