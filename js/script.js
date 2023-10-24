const resultEl = document.querySelector('.alert');

// SNACK 1
const invitati = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const segnaposto = [];
invitati.forEach((element, index) => {
    const invitato = {
        guestName: element,
        tableName: 'Tavolo Vip',
        place: index + 1
    }
    segnaposto.push(invitato);
});
console.log(segnaposto);

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
