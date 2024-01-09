document.getElementById('btn-entrez').addEventListener('click', event => {
    event.preventDefault ();

    let number = parseInt(document.getElementById('number').value);

    function FizzBuzz (nombre) {
        if (nombre % 5 === 0  && nombre % 3 === 0){
            return document.getElementById('result').innerHTML= "Fizzbuzz"
        } else if (nombre % 3 === 0){
            return document.getElementById('result').innerHTML="Fizz"
        } else if (nombre % 5 === 0 ){
            return document.getElementById('result').innerHTML="Buzz"
        }
    };
    FizzBuzz(number);
});

