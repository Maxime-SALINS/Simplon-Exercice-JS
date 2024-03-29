//Il faut un tableau initial qui comporte chaque couleur :  "rouge", "bleu", "vert", "jaune"
//Il faut un tableau vide qui servira de support à la séquence aléatoire
//Il faut une variable score, qui sera utilisé pour la gestion du score de l'utilisateur
//Le programme affichera la séquence à l'utilisateur pendant 30s
//Le programme demandera à l'utilisateur de rentrer couleur par couleur la séquence qu'il vient de voir (il y aura du tour par tour)
//Chaque tour le programme compare la séquence générée aléatoirement et la séquence entré par l'utilisateur
//Tant que l'utilisateur à juste, le jeu passe à l'étape suivante et le programme ajoute +1 au score
//lorsque l'utilisateur à faux, le jeu s'arrête et le score du joueur est affiché

function genererCouleurAleatoire() {
    let ColorTable = ["rouge" , "bleu" , "vert" , "jaune"];
    return ColorTable[Math.floor(Math.random() * ColorTable.length)];
}

function ajouterCouleurSequence(sequence) {
    sequence.push(genererCouleurAleatoire());
    return sequence
}

function jouerTour(sequence) {
    alert ("La séquence de couleur est : " + sequence.join(" , "));
    for (let iterator of sequence) {
        let Usercolor = window.prompt("Entrez la bonne couleur : ");
        if (Usercolor !== iterator){
            return false
        }
    }
    return true
}

function JeuDeMemoire() {
    let randomSequence = [];
    let tour = true;
    while (tour){
        randomSequence = ajouterCouleurSequence(randomSequence);
        tour = jouerTour(randomSequence)
        if (!tour){
            alert (`Vous avez perdu la sequence était ${randomSequence.join(" , ")}`);
            break
        }
        alert("Bien joué ! passe à l'étape suivante");
    }
    alert(`Le jeu est fini votre score est : ${randomSequence.length - 1}`)
}

JeuDeMemoire()

//console.log(genererCouleurAleatoire());

// console.log(ColorTable);