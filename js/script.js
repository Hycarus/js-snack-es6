const resultEl = document.querySelector('.alert');

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



