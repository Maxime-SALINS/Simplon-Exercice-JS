//Il faut un tableau initial qui comporte chaque couleur :  "rouge", "bleu", "vert", "jaune"
//Il faut un tableau vide qui servira de support à la séquence aléatoire
//Il faut une variable score, qui sera utilisé pour la gestion du score de l'utilisateur
//Le programme affichera la séquence à l'utilisateur pendant 30s
//Le programme demandera à l'utilisateur de rentrer couleur par couleur la séquence qu'il vient de voir (il y aura du tour par tour)
//Chaque tour le programme compare la séquence générée aléatoirement et la séquence entré par l'utilisateur
//Tant que l'utilisateur à juste, le jeu passe à l'étape suivante et le programme ajoute +1 au score
//lorsque l'utilisateur à faux, le jeu s'arrête et le score du joueur est affiché

let Sequence = [];
let score = 0;

function genererCouleurAleatoire() {
    let ColorTable = ["rouge" , "bleu" , "vert" , "jaune"];
    return ColorTable[Math.floor(Math.random() * ColorTable.length)];
}

function ajouterCouleurSequence(sequence) {
    while (sequence.length < 7){
        sequence.push(genererCouleurAleatoire());
    }
    return sequence
}

function jouerTour(sequence) {
    alert ("La séquence de couleur est : " + ajouterCouleurSequence(sequence));
    let UserTable = [];
    while (UserTable.length < sequence.length) {
        let Usercolor = window.prompt("Entrez la bonne couleur : ");
        let Check = sequence[sequence.indexOf(Usercolor)]
        if (Usercolor === Check) {
            alert("ok")
        } else {
            alert("Pas ok")
        }

        UserTable.push(Usercolor);
        console.log(Check);
        // if (Usercolor === ajouterCouleurSequence(sequence[sequence.indexOf(Usercolor)])) {
        //     UserTable.push(UserTable);
        // } else {
        //     return false
        // }
    }
    console.log(UserTable);
}

jouerTour (Sequence);

//console.log(genererCouleurAleatoire());

// console.log(ColorTable);


console.log(Sequence);