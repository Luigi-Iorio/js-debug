/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// ESERCIZIO 1
// function checkAge() {
//   const myAge = 32;
//   const message = "";

//   if (myAge < 18) {
//     message = `Sei troppo giovane! Hai ${myAge} anni!`;
//   } else {
//     message = "Hai più di 18 anni!";
//   }
// }
// checkAge();

/*
Risposta 1

Questa funzione dovrebbe restituire 2 messaggi,
se l'eta è minore di 18 (Sei troppo giovane! Hai 32 anni!)
se l'eta è maggiore di 18 ("Hai più di 18 anni!")
*/

/*
Risposta 2

Sono presenti errori di sintassi, la variabile message deve avere let e non const
perchè assume un valore in base al caso in cui si trova
*/

/*
Risposta 3

Per visualizzare in console il messaggio, mettere un console.log alla fine della funzione
*/

// Soluzione - esercizio 1
function checkAge() {
  const myAge = 32;
  let message = "";

  if (myAge < 18) {
    message = `Sei troppo giovane! Hai ${myAge} anni!`;
  } else {
    message = "Hai più di 18 anni!";
  }

  console.log(message);
}

checkAge();

// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

/*
Risposta 1

Questa funzione dovrebbe restituire il numero di colori
presenti nell'array colors. Il messeggio con il numero di colori
viene stampato in console.
*/

/*
Risposta 2

È presente un errore di sintassi (colors.length)
per visualizzare il numero di colori sostituire l'errore con (colors.length)
*/

/*
Risposta 3

Non sono presenti errori di tipo logico
*/

// Soluzione - esercizio 2
function printColorsNumber() {
  const colors = ["blue", "red", "yellow", "green", "black"];
  console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

/*
Risposta 1

Questa funzione dopo aver richiesto un numero tramite pompt
dovrebbe restituire la somma tra il numero inserito e 12 
*/

/*
Risposta 2

Si, per sistemare l'errore bisogna convertire il risultato
del prompt da una stringa ad un numero
*/

/*
Risposta 3

Non sono presenti errori di tipo logico
*/

// Soluzione - esercizio 3
function addNumbers() {
  const userNumber = parseInt(prompt("Inserisci un numero"));
  const total = userNumber + 12;

  console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';

//             }

//         }

//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     }
//     checkAccessImproved();
