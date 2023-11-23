/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//   console.log(i);
// }

/*
-- Risposta 1

Questo codice attraverso il ciclo for, inizializza un indice a 0,
finche l'indice è maggiore di 5 esegui l'istruzione nel ciclo
e infine aumenta l'indice di uno.

L'istruzione che dovrebbe eseguire il ciclo è loggare in console
l'indice
*/

/*
-- Risposta 2

Non sono presenti errori di sintassi
*/

/*
-- Risposta 3

Sono presenti errori logici, il ciclo non verrà mai eseguito
perchè i non è maggiore di 5
*/

// Soluzione - esercizio uno (loggare in console i numeri da 0 a 5)
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
