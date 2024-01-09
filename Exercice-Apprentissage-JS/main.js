// Exercice n°1
// console.log("Bonjour, Toi!");

// Exercice n°2: Calcul Mental
// let resultat = 7 + 3;
// console.log(resultat);

// Exercice n°3 Message Personnalisé
// let username=prompt("Entrez votre prénom :");
// console.log("Bienvenue, " + username + " !");

// Exercice n°4 Compte à Rebours
// for (let i=5; i>0 ; i--) {
//     console.log(i);
// }

// Exercice n°5 Pair ou Impair ?

// let asknumber=prompt("Entrez un nombre ? ");
// let number= parseInt(asknumber);

// if (number % 2 == 0){
//     console.log("Votre chiffre est pair !")
// } else {
//     console.log("Votre chiffre est impair !")
// }

// Exercice 6 : Table de Multiplication

// let asknumber=prompt("Entrez un nombre ? ");
// let number = parseInt(asknumber);

// for (let i=1; i<= 10; i++) {
//     product = i*number ;
//     console.log(number + " x "+ i + " = " + product);
// };

// Exercice 7 : Mot de Passe
// let askpassword = prompt("Entrez un mot de passe : ");
// let password = parseInt (askpassword);

// if (password === 1234){
//     console.log("Accès Autorisé");
// } else {
//     console.log("Accès Refusé");
// }

//Exercice n°8 : Calcul de Moyenne
// let asknumber=prompt("Entrez plusieurs nombres séparés par des virgules : ");
// let tablenumber = asknumber.split(",");
// let scores= 0;

// console.log(tablenumber);

// for (let i=0; i<tablenumber.length; i++){
//     scores += parseInt(tablenumber[i]);
// }

// let average = scores / tablenumber.length;
// console.log("Votre moyenne est : " + average);

//Exercice n°9 : Mot Inversé

let word = prompt("Entrez un mot : ");
let reverseword = word.split('').reverse().join('');
console.log(reverseword);
