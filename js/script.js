// Control JS 
console.log('Js OK');

// Section Name 
const firstName = prompt('Inserisci il tuo nome');
console.log('firstName');

// Section Surname 
const surName = prompt('Inserisci il tuo cognome');
console.log('SurName');

// Section Color 
const colorPrefer = prompt('Inserisci il tuo colore preferito');
console.log('colorPrefer');

// Stringa su Console 
console.log('Questa è la tua password:' + firstName + surName + colorPrefer + '21');

// Stringa sul codice HTML 
document.getElementById('password').innerText = `Questa è la tua password:${firstName}${surName}${colorPrefer}21`;