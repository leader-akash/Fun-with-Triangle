const sides = document.querySelectorAll(".side-output");

const button = document.querySelector("#button");
const output = document.querySelector("#output");

function calculateSumOfSquares(a,b){
    const sumOfSquares = a**2 + b*b; // boht are doing square
    // console.log(sumOfSquares);
    return sumOfSquares;
}

function calculateHypotenuse(){

    if(!sides[0].value){
        alert('fill a section')
        return;
    }
    if(!sides[1].value){
        alert('fill b section')
        return;
    }

    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));

    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    console.log(lengthOfHypotenuse);

    output.innerText = "The length of Hypotenuse is: " +lengthOfHypotenuse + " 🤟" ;

    
}

button.addEventListener('click', calculateHypotenuse);
