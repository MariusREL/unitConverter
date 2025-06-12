// fetch the button and make it fetch the input field data, check for typeof number

// write a function that when the button is clicked, take input innertext and send it to converter that send the resulting conversion to the 3 paragraph tags 

const inputText = document.querySelector(".input")
const convertBtn = document.querySelector(".convert-btn")
const lengthPara = document.querySelector("#length-conversion")
const volumePara = document.querySelector("#volume-conversion")
const massPara = document.querySelector("#mass-conversion")

inputText.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault(); 
        convertBtn.click(); 
    }
});

function meterToFeet(a){
     return (a * 3.28084).toFixed(2)
}
function feet(a){
    return (a * 0.3048).toFixed(2)
}

function literToGal(a){
    return (a * 3.78541).toFixed(2)
}

function galToLiters(a){
    return (a * 0.264172).toFixed(2)
}

function kiloToPounds(a){
    return (a * 2.20462).toFixed(2)
}

function poundsToKilo(a){
    return (a / 2.20462).toFixed(2)
}
convertBtn.addEventListener("click", function(){
    const userInput = Number(inputText.innerText);
    if (!isNaN(userInput)){

        lengthPara.innerHTML = `${userInput} meters = ${meterToFeet(userInput)} feet | ${userInput} feet = ${feet(userInput)} meters  `;

        volumePara.innerHTML = `${userInput} liters = ${literToGal(userInput)} gallons | ${userInput} gallons = ${galToLiters(userInput)} liters  `;

        massPara.innerHTML = `${userInput} kilos = ${kiloToPounds(userInput)} pounds | ${userInput} pounds = ${poundsToKilo(userInput)} kilos  `;

    } else {
        lengthPara.innerHTML = `That's no number laddie `;
        volumePara.innerHTML = `You should type a number instead`
        massPara.innerHTML = `Stop being difficult `
    
    }   
})

