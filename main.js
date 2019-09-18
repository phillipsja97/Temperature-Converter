// const input = document.getElementById('submit');

printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML += stringToPrint;
};

// const input = document.getElementById('submit').addEventListener('click', (event) => {
//     inputSubmit = event.target.id;

// });

// const input = document.getElementById('inputNumber');
// console.log(input);
// const celsius = 30;
// const fahrenheit = 50;

const toFahrenheit = () => {
    let input = document.getElementById('inputNumber').value * (9/5) + 32;
    let fahrenheit = Math.round(input);
    printToDom('resultsField', `<h3>${fahrenheit}</h3>`)
    
};


const toCelsius = () => {
    let input = (document.getElementById('inputNumber').value - 32) * 5/9
    let celsius = Math.round(input);
    printToDom('resultsField', `<h3>${celsius}</h3>`)
};

const determineConverter = (e) => {
    if (document.getElementById('inlineRadio1').checked) {
        toFahrenheit();
    } else if (document.getElementById('inlineRadio2').checked) {
        toCelsius();
    }
};


submitButton.addEventListener('click', determineConverter);






