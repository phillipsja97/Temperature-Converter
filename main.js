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

submitButton.addEventListener('click', toFahrenheit);

// const toCelsius = () => {
//     let input = (document.getElementById('inputNumber').value - 32) * 5/9
//     let celsius = Math.round(input);
//     printToDom('resultsField', `<h3>${fahrenheit}</h3>`)
// };







