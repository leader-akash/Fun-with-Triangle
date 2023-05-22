const inputs = document.querySelectorAll(".angle-input");
// querySelectorAll is used to select classes in js.
const button = document.querySelector("#submit");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){

    const sum = angle1 + angle2 + angle3;
    // console.log(sum);
    return sum;
}

function isTriangle(){
    const sum = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    // console.log(sum);

    if(sum === 180){
        output.innerText = "Yay the angles form a triangle !🤙";
    } 
    else{
        output.innerText = "oh oh! the angles don't form a triangle 😐🤐";
    }
}

button.addEventListener('click', isTriangle);