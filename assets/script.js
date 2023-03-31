var startButton = document.getElementById('startBtn')
var correctBtn = document.querySelector("#right")
const listOfIncorrectBtns = document.querySelectorAll("#wrong");

startButton.addEventListener("click", myTimer)
correctBtn.addEventListener("click", ()=>{
    console.log("Yay");
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