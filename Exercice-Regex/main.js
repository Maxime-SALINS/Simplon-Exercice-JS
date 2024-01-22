//construire le tableau pour mettre les élements que les utilisateurs ont le droits de mettre
//function testAlpha (), avec un paramêtre permettant de voir une chaîne de caractère
//Dans la fonction ont fait une boucle for (let i=0, i<chaine.length, i++)
//Dans le boucle for on fait une condition if, la condition est si l'élément n'est pas inclus dans le tableau je retourne false
//Si la condition est fausse je renvoie vrai.

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const number = ["0", "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
const mail = ["-" , "." , "@" , "_"];
const newTable = [...alphabet , ...number , ...mail]
// console.log(newTable);
//On initie une variable permettant de récupérer une chaine de caractère entrée par l'utilisateur
let username = document.getElementById("name").value;
let userPhoneNumber = document.getElementById("phone").value;
let emailUser = document.getElementById("email").value;
// console.log(userPhoneNumber);
// let username = "N1co";
// console.log(username);

//On construit une fonction permettant de controler si la donnée rentré par l'utilisateur est bonne ou non par rapport au tableau
//On doit mettre un paramètre générique pour réutiliser la fonction dans le programme
function testAlpha (input , arrayCompare) {
    for (let i = 0; i < input.length; i++) {
        //On test si la valeur saisie par l'utilisateur est vraie ou fausse
        if (arrayCompare.includes(input[i]) === false){
            //Si la condition est remplie on renvoie false
            return false
        }
    }
    //Si la condition du if n'est pas remplie on renvoie true
    return true
};

console.log(testAlpha(username , newTable));
console.log(testAlpha(userPhoneNumber , newTable));
console.log(testAlpha(emailUser , newTable));