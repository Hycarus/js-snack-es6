const resultEl = document.querySelector('.alert');
const app = document.getElementById('app');

// SNACK 1
const invitati = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

let segnaposto = [];
// invitati.forEach((element, index) => {
//     const invitato = {
//         guestName: element,
//         tableName: 'Tavolo Vip',
//         place: index + 1
//     }
//     segnaposto.push(invitato);
// });
// console.log(segnaposto);

// SNACK 1 VARIANTE CON MAP
const invitatoMap = invitati.map((element, index) => {
        return    {
            guestName: element,
            tableName: 'Tavolo Vip',
            place: index + 1
        }
    });
console.log(segnaposto);invitatoMap


// SNACK 2

const student = [
    {
        Id: 213,
        Name: 'Marco della Rovere',
        Grades: 78
    },
    {
        Id: 110,
        Name: 'Paola Cortellessa',
        Grades: 96
    },
    {
        Id: 250,
        Name: 'Andrea Mantegna',
        Grades: 48
    },
    {
        Id: 145,
        Name: 'Gaia Borromini',
        Grades: 74
    },
    {
        Id: 196,
        Name: 'Luigi Grimaldello',
        Grades: 68
    },
    {
        Id: 102,
        Name: 'Piero della Francesca',
        Grades: 50
    },
    {
        Id: 120,
        Name: 'Francesca da Polenta',
        Grades: 84
    },
]

const studentUpperCase = student.map((studente) => {
    return studente.Name.toUpperCase();
})
console.log(studentUpperCase);
const upper70 = student.filter((studente) => studente.Grades > 70);
console.log(upper70);
const upper120 = student.filter((studente) => studente.Grades > 70 && studente.Id > 120);
console.log(upper120);


// SNACK 2 VARIANTE CON FILTER DAL SECONDO ARRAY

const upper120Second = upper70.filter((studente) => studente.Id > 120);
console.log(upper120Second);

// BONUS 1
// Scriviamo una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che nel primo hanno la posizione compresa tra i due numeri

const array1 = ['1','3','4','5','6','9','12','45']
function between(array, numMin, numMax){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if(i >= numMin && i<= numMax){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
let x = between(array1, 2, 6)
console.log(x);

// BONUS 1 CON FILTER 

function between2(array, numMin, numMax){
    let y = array.filter((element, index) => {
        return index >= numMin && index <= numMax;
    })
    return y
}
let w = between2(array1, 2, 6);
console.log(w);


// SNACK 3

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bikes = [
    {
        nome: 'Bianchi',
        peso: 34
    },
    {
        nome: 'Casati',
        peso: 56
    },
    {
        nome: 'Olmo',
        peso: 63
    },
    {
        nome: 'Atala',
        peso: 24
    },
    {
        nome: 'Colnago',
        peso: 32
    },
    {
        nome: 'Bottecchia',
        peso: 51
    }
]

const min = [];
bikes.forEach((element, index)=> {
    const {peso} = bikes[index];
    min.push(peso);
})
const res = bikes.filter((element)=>{
    return element.nome && element.peso === Math.min(...min);
})
console.log(`La bici che pesa di meno è: ${res[0].nome} e pesa ${res[0].peso}kg`);
document.body.innerHTML = `
<div class="m-5">
    La bici che pesa di meno è: ${res[0].nome} e pesa ${res[0].peso}kg
</div>
`;

// SNACK 4

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreCalcio = [
    {nome: "Juve",         
    punti: 0,         
    falliSubiti: 0,     
    },     
    {         
    nome: "Milan",         
    punti: 0,         
    falliSubiti: 0,     
    },     
    {         
    nome: "Fiorentina",         
    punti: 0,         
    falliSubiti: 0,     
    },     
    {         
    nome: "Udinese",         
    punti: 0,         
    falliSubiti: 0,     
    },     
    {         
    nome: "Inter",         
    punti: 0,         
    falliSubiti: 0,     
    },
    {
    nome: "Napoli",         
    punti: 0,         
    falliSubiti: 0,     
    }
];
squadreCalcio.forEach((element, index)=>{
    const copySquadreCalcio = {...squadreCalcio[index], punti: getRndInteger(1, 100), falliSubiti: getRndInteger(1, 100)}
    console.log(copySquadreCalcio);
    const {nome, falliSubiti} = copySquadreCalcio;
    console.log({nome, falliSubiti});
    print(copySquadreCalcio);
});

function print(copySquadreCalcio){
    const div = document.createElement('div');
    document.body.append(div);
    div.innerHTML = `
    <div class="ms-5 py-3">
        ${copySquadreCalcio.nome} ha subito ${copySquadreCalcio.falliSubiti} falli e ha fatto ${copySquadreCalcio.punti} punti
    </div>
    `;
}
class Card {
    title;
    text;
    image = 'idefault-image.jpg';
    container;
    constructor(title, text, image, container){
        this.title = title;
        this.text = text;
        this.image = image;
        this.container = container;
    }
    printCard(){
        const divEl = document.createElement('div');
        divEl.classlist.add('col-4');
        const template = `
        <div class="card">
            <img src="img/${this.image}" class="card-img-top" alt="${this.title}">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.text}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`;
        divEl.innerHTML = template;
    };
}


