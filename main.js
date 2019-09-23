// const input = document.getElementById('submit');

printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
};



const toFahrenheit = () => {
    let input = document.getElementById('inputNumber').value * (9/5) + 32;
    let tempOutput = Math.round(input);
    printToDom('output', `<h3>${tempOutput}</h3>`);
    if (tempOutput > 90) {
        document.getElementById('output').style.color = 'red';
    } else if (tempOutput < 32) {
        document.getElementById('output').style.color ='blue';
    }
};


const toCelsius = () => {
    let input = (document.getElementById('inputNumber').value - 32) * 5/9
    let tempOutput = Math.round(input);
    printToDom('output', `<h3>${tempOutput}</h3>`)
    if (tempOutput > 32) {
        document.getElementById('output').style.color = 'red';
    } else if (tempOutput < 0) {
        document.getElementById('output').style.color ='blue';
    }
};

const determineConverter = (e) => {
    if (document.getElementById('inlineRadio1').checked) {
        toFahrenheit();
    } else if (document.getElementById('inlineRadio2').checked) {
        toCelsius();
    }
};

// const clearField = (e) => {
//     printToDom('resultsField', );
//     document.getElementById('inputNumber').value = '';
// };

// const clearField = (e) => {
//     e.target.id = document.getElementById('resultsField').onClick = clear();
//     document.getElementById.('inputNumber').value = '';
// };

// target = document.getElementById("customfield_1000000");
// function clear()
// {
// target.value = "null";
// }
// var createbutton = document.getElementById("Create");
// createbutton.onclick=clear


const submitButton = () => {
    let submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', (determineConverter)
    )};

    submitButton();

const clearField = () => {
    let clearButton = document.getElementById('clearButton');
        clearButton.addEventListener('click', (event) => {
            document.getElementById('output').remove();
            document.getElementById('inputNumber').value = '';
        })
};

    clearField();

// submitButton.addEventListener('click', determineConverter);
// clearButton.addEventListener('click', clearField);





