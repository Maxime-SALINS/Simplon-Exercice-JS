// JS DOM Exercise 1
function sayHello() {
    document.getElementById('demo').innerHTML = 'Hello JavaScript!'
}

// Ex 1 : Dark Mode

function toggleDarkMode(){
    document.body.classList.toggle('dark-mode');
    //let element=document.getElementById('Dark Mode');
    //element.classList.toggle('dark-mode');
}

// Ex 2 : Random Image

const images = [
    'images/dog1.jpg',
    'images/dog2.jpg',
    'images/dog3.jpg',
    'images/dog4.jpg',
    'images/dog5.jpg',
    'images/dog6.jpg',
];

function randomImage (){
    let item = images[Math.floor(Math.random()*images.length)];
    document.getElementById('random-image').src=item ;
};

// Ex 3 : Counter

let counter = 0 ;
function count() {
    counter++
    document.getElementById('counter').innerHTML = counter;
};

// Ex 4 : Displaying a List

const fruits = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

function displayList(){
    let ul = document.getElementById('display_list')
    for (let i=0 ; i < fruits.length ; i++){
        let li = document.createElement('li');
        li.innerText = fruits[i];
        ul.appendChild(li);
    };
};

displayList()

// Ex 5 : Add Item to list

const randomFruits = ['Fig', 'Grape', 'Honeydew', 'Imbe', 'Jackfruit', 'Kiwi'];

function addItem(){
    let items = randomFruits[Math.floor(Math.random()*randomFruits.length)];
    let ul = document.getElementById('display_list');
    let li = document.createElement ('li');
    li.innerHTML = items;
    ul.appendChild(li);
};


// Ex 5 bis : Remove Item to list
// Tips : https://developer.mozilla.org/fr/docs/Web/API/Element/lastElementChild
// Tips : https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
function removeItem(){
    let element = document.getElementById('display_list');
    let oldelement= element.lastElementChild;
    element.removeChild(oldelement);
};

// Ex 6 : Displaying a list of objects

const persons = [
    { id: 36728, name: 'Mary', age: 35, student: true },
    { id: 9223, name: 'John', age: 20, student: true },
    { id: 30922, name: 'Peter', age: 38, student: false },
    { id: 9382, name: 'Jane', age: 29, student: true },
    { id: 1023, name: 'Tony', age: 30, student: false },
    { id: 452, name: 'Suzan', age: 21, student: true },
];

function displayObjectList(){
    let ul = document.getElementById('display_list_object');
    //console.log(ul);
    for (let i = 0; i < persons.length ; i++){
        let li = document.createElement('li');
        li.innerHTML= ` id= ${persons[i].id} ; name= ${persons[i].name} ; age= ${persons[i].age} ; student= ${persons[i].student}`;
        ul.appendChild(li);
    }
};

displayObjectList()

// Ex 7 : Displaying a list of objects with a filter

const cars = [
     { id: 1, brand: 'Toyota', model: 'Vios', price: 90000, available: true },
     { id: 2, brand: 'Toyota', model: 'Altis', price: 120000, available: true },
     { id: 3, brand: 'BMW', model: 'Jazz', price: 110000, available: false },
     { id: 4, brand: 'BMW', model: 'City', price: 95000, available: true },
     { id: 5, brand: 'Nissan', model: 'Almera', price: 80000, available: false },
     { id: 6, brand: 'Nissan', model: 'Teana', price: 130000, available: true },
     { id: 7, brand: 'Peugeot', model: 'Peugeot 208', price: 100000, available: true },
     { id: 8, brand: 'Peugeot', model: 'Peugeot 308', price: 120000, available: false },
 ];

 function displayCarsByBrand(){
    let ul = document.getElementById('display_list_car');
    ul.innerHTML = "";
    let filter = document.getElementById('filter').value;
    for (let i=0 ; i < cars.length ; i++){
        let li = document.createElement('li');
        if(filter === cars[i].brand){
            li.innerHTML= `id= ${cars[i].id} ; brand= ${cars[i].brand} ; model= ${cars[i].model} ; price= ${cars[i].price} ; available= ${cars[i].available}`;
            ul.appendChild(li);
        };
    };
 };

 displayCarsByBrand()

// Ex 7 bis : Reset the filter
function resetFilter(){
    let ul = document.getElementById ('display_list_car');
    ul.innerHTML = "";
    document.getElementById('filter').selectedIndex = 0;
    for (let i = 0; i < cars.length ; i++){
        let li = document.createElement('li');
        li.innerHTML= `id= ${cars[i].id} ; brand= ${cars[i].brand} ; model= ${cars[i].model} ; price= ${cars[i].price} ; available= ${cars[i].available}`;
        ul.appendChild(li);
    };

};

// Ex 8 : Displaying a list of objects in card html

function displayCarsInCard(){
    let listCard = document.getElementById('card-list');
    for (let i = 0; i < cars.length ; i++){
        let article = document.createElement('div')
        article.classList.add('card')
        article.innerHTML= `
        <h3>Car : ${cars[i].id}</h3>
        <p>${cars[i].brand}</p>
        <p>${cars[i].model}</p>
        <p>${cars[i].price}</p>
        `;
        listCard.appendChild(article);
    };
};

displayCarsInCard()