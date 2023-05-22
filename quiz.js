const quizForm = document.querySelector(".quiz-form");
const button = document.querySelector("#submit");
const output = document.querySelector("#output");

const correctAnswers = ["89°", "right-angled", "yes", "isosceles", "5cm", "30"];

function calculateScores(){
    let score = 0;
    let index = 0;

    // formData is an api that fetches form's data with key value and name pairs
    const formResults = new FormData(quizForm);
    
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score+1;
        }
        index++;
    }
    console.log(score);

    output.innerText = "Your score is : " + score;
}

button.addEventListener('click', calculateScores);


