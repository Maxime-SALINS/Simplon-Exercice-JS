
// Exercice 1: Sélectionner un Élément
// Objectif : Sélectionner un élément par son ID et changer son texte.
// Créez un élément HTML avec un ID unique.
// Utilisez document.getElementById pour sélectionner cet élément.
// Modifiez le texte de cet élément en utilisant textContent.
let element = document.getElementById('element');
element.textContent = "Hello world !";

// Exercice 2: Manipuler les Styles
// Objectif : Modifier le style d'un élément.
// Sélectionnez un élément par son ID comme dans l'exercice 1.
// Changez la couleur et la taille de la police de cet élément.
element.style.fontSize= "100px";
element.style.color = "red";


// Exercice 3: Événements
// Objectif : Ajouter un gestionnaire d'événements à un bouton(boucle).
// Créez un bouton dans votre HTML.
// Utilisez getElementById pour sélectionner le bouton.
// Ajoutez un écouteur d'événements click qui change la couleur de fond du bouton lorsqu'il est cliqué.
let bouton = document.getElementById('btn-color');
bouton.addEventListener('click', ()=>{
    bouton.style.background = "blue";
    bouton.style.color = "white";
    bouton.style.borderRadius = "300px";
    bouton.style.padding = "5px";
});

// Exercice 4: Sélectionner Plusieurs Éléments
// Objectif : Utiliser getElementsByClassName ou getElementsByTagName.
// Créez plusieurs éléments avec la même classe ou balise.
// Utilisez getElementsByClassName ou getElementsByTagName pour les sélectionner.
// Modifiez le texte de tous ces éléments simultanément.

let div = document.getElementsByClassName("a");
for (let i = 0; i < div.length; i++) {
    div[i].innerHTML = "Hello !"
}
//console.log(div);

let div2 = document.getElementsByTagName("section");
for (let i = 0; i < div2.length; i++) {
    div2[i].innerHTML = "Salut !"
}
// console.log(div2);

// Exercice 5: Création et Insertion d'Éléments
// Objectif : Créer un nouvel élément et l'ajouter au DOM.
// Créez un nouvel élément (par exemple, un div ou un p) en utilisant document.createElement.
// Ajoutez du texte à cet élément.
// Insérez cet élément dans le DOM à l'endroit souhaité.
let newdiv = document.createElement("div");
newdiv.innerHTML = "Salut je m'appel Maxime !";
document.body.appendChild(newdiv);

// Exercice 6: Manipulation des Attributs
// Objectif : Modifier les attributs d'un élément (par exemple, href d'un lien).
// Sélectionnez un élément (par exemple, un lien).
// Utilisez getAttribute pour lire un attribut existant.
// Modifiez cet attribut en utilisant setAttribute.

//pointe l'élement par son ID
let monlien = document.getElementById ("lien");

//Affiche la valeur de l'attribu "href"
let attribut = monlien.getAttribute ("href");
console.log(attribut);

//Modification du lien
monlien.setAttribute("href", "https://github.com/Maxime-SALINS/Simplon-Exercice-JS");

//Affiche la nouvelle valeur de l'attribu "href"
let newattribut = monlien.getAttribute ("href");
console.log(newattribut);


// Exercice 7: Utilisation de innerHTML
// Objectif : Modifier le contenu HTML d'un élément.
// Sélectionnez un élément par son ID.
// Modifiez son contenu HTML en utilisant innerHTML.
// Ajoutez des éléments HTML (comme une liste ou un paragraphe) à l'intérieur de cet élément.
let monElement = document.getElementById("color");
monElement.innerHTML=`<ul>
<li>Ma liste</li>
<li>Ma liste</li>
</ul>
<p>Je suis entrain de manipuler le DOM hahah ! </p>`;

// Exercice 8: Manipulation de Classes CSS
// Objectif : Ajouter, enlever et basculer des classes CSS.
// Créez un élément avec une classe CSS pré-définie.
// Utilisez classList.add pour ajouter une nouvelle classe à cet élément.
// Utilisez classList.remove pour enlever une classe.
// Utilisez classList.toggle pour basculer une classe lors d'un événement, comme un clic.

// Exercice 9: Manipulation Directe des Styles
// Objectif : Modifier directement les styles d'un élément.
// Sélectionnez un élément.
// Modifiez différents styles CSS directement en utilisant element.style.property (par exemple, element.style.backgroundColor).

// Exercice 10: Travailler avec setAttribute et getAttribute
// Objectif : Utiliser setAttribute et getAttribute pour manipuler les attributs d'un élément, le "src" d'une image par exemple.
// Sélectionnez un élément (comme un lien ou une image).
// Utilisez getAttribute pour lire un de ses attributs.
// Changez cet attribut avec setAttribute.

// Exercice 11: Création et Manipulation de Listes
// Objectif : Créer une liste dynamique et la manipuler.
// Créez une liste ul ou ol vide dans votre HTML.
// Utilisez JavaScript pour ajouter des éléments li à la liste en utilisant appendChild ou insertBefore.