//console.log('Hello from assets/js/main.js');
// calculette JS
// Veuilles suivre les instructions dans le fichier instructions.md

document.getElementById("calculate_button").addEventListener('click', event => {
    event.preventDefault();
    
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let operator = document.getElementById('operator').value;
    let result = 0;
    
    if (number1 != '' && number2 != '') {
        if (operator === 'addition'){
            result = parseInt(number1) + parseInt(number2);
        } else if (operator === 'soustraction'){
            result = parseInt(number1) - parseInt(number2);
        } else if (operator === 'multiplication'){
            result = parseInt(number1) * parseInt(number2) ;
        } else {
            result = parseInt(number1) / parseInt(number2) ;
        }
        document.getElementById('result').innerHTML = result;
        
    } else {
        document.getElementById('error').innerHTML = "Veuillez remplir les champs";
    };
});

