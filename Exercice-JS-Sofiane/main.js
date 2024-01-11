//Exercice n°1

// let number=prompt("Entrez un nombre ?");
// let number2=prompt("Entrez un nombre ?");

// function Addition (n1 , n2) {
//     addition = parseInt(n1) + parseInt(n2);
//     return addition
// }

// console.log(Addition(number , number2));


//Exercice 2

// function nombrePair (){
//     for (let i = 0; i < 101; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         } 
//     }
// }

// nombrePair()

//Exercice 3 & 4

// function RandomNumber(){
//     let number = Math.random()
//     console.log(number);
//     return Math.round(number)
// };

// console.log(RandomNumber());

// Exercice 5

// let Usernumber = prompt("Entrez un nombre ?")
// let numberR = Math.random() * (1000 - 0) + 0;
// let numberint = Math.round(numberR)

// function divisionNumber (number , random) {
//     if (random % parseInt(number) == 0) {
//         console.log("Le nombre random est divisible par votre chiffre"); 
//     } else {
//         console.log("Le nombre random n'est pas divisible par votre chiffre");
//     };
// };

// console.log(Usernumber);
// console.log(numberint);
// divisionNumber (Usernumber , numberint);

// Exercice 6

// document.addEventListener("auxclick", ()=>{
//     alert("vous avez fait un clic droit")
// });

// Exercice 7

// const title = document.getElementById('style_h1');

// let a = Math.floor(Math.random() * 255);
// let b = Math.floor(Math.random() * 255);
// let c = Math.floor(Math.random() * 255);
// let color = `rgb(${a},${b},${c})`

// title.style.color = color;

// title.addEventListener("load", color);

// Exercice 8

petitTableau1 = ["Maxime" , "Valérie" , "Mathilde" , "Olivier" , "Emilie" , "Océane" , "Eloane"];

for (let i = 0; i < petitTableau1.length; i++) {
    console.log(petitTableau1[i]);
};

//Exercice 9

petitTableau2 = [26 , 54 , 22 , 53 , 47 , 17 , 15];

for (let i = 0; i < petitTableau2.length; i++) {
    let TableauContainer = document.createElement('div');
    TableauContainer.innerHTML= petitTableau2[i];
    document.body.appendChild(TableauContainer);
}