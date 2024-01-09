//Le programme choisi de manière random entre pierre/feuille/ciseaux
//Demander à l'utilisateur de choisir entre pierre/feuille/ciseaux
//Comparer la réponse de l'utilisateur par rapport à celle du programme
//Retourner un message à l'utilisateur s'il a gagné ou perdu


const table = ["pierre" , "feuille" , "ciseaux"] ;
let index = Math.floor(Math.random()*(table.length - 0) + 0);
let choiceIA = table[index];
let Userchoice = window.prompt("Choisir entre pierre/feuille/ciseaux : ");
let stringResearch = table[table.indexOf(Userchoice)];
//console.log(stringResearch);

while (Userchoice !== stringResearch){
    alert ("Entrez une chaine de caractère")
    Userchoice = window.prompt("Choisir entre pierre/feuille/ciseaux : ")
    stringResearch = table[table.indexOf(Userchoice)];
}

alert ("Correct, vous avez rentez la bonne information !")

if (Userchoice === choiceIA){
    alert ("Vous avez choisi la même chose ");
} else if (Userchoice === "pierre" && choiceIA === "feuille" || Userchoice === "feuille" && choiceIA === "ciseaux" || Userchoice === "ciseaux" && choiceIA === "pierre"){
    alert("Vous avez perdu !");
} else {
    alert ("Bravo vous avez gagner !");
}

// console.log(index);
// console.log(table[0]);
// console.log(table[1]);
// console.log(table[2]);
// console.log(table[index]);
// console.log(choiceIA);
// console.log(Userchoice);