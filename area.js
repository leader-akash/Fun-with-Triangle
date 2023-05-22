const sides = document.querySelectorAll(".side-output");
const button = document.querySelector("#button");
const output = document.querySelector("#output");


function areaOfTriangle(base, height){
    const area = (base*height)/2;
    // console.log(area);
    return area;
}


function calculateArea(base, height){
    // areaOfTriangle(3, 2);
    base = Number(sides[0].value);
    height = Number(sides[1].value);

    if(!base){
        alert("fill base");
        return;
    }
    if(!height){
        alert("fill height");
        return;
    }

    const area = areaOfTriangle((base), Number(height));

    output.innerText = "Area of Triangle is: " + area + " 📐";

}


button.addEventListener('click', calculateArea);