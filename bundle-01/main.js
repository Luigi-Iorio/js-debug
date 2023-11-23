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

/*
-- Risposta 1

Questo codice attraverso la funzione addIfEven() verifica una condizione
se il numero diviso 2 ha il resto uguale a 0 (pari), aggiungi 5 al numero.
Altrimenti se il numero è dispari restituisci il numero.
*/

/*
-- Risposta 2

È presente un errore di sintassi, dopo aver utilizzato l'operatore modulo (%)
invece di = per la verifica utilizzare ===
*/

/*
-- Risposta 3

Ho preferito utilizzare una varibile risultato che di default fosse uguale a num
se num è pari risultato = num + 5. dopo la condizione if stampo il risultato con console.log
*/

// Soluzione - esercizio due
function addIfEven(num) {
  let risultato = num;
  if (num % 2 === 0) {
    risultato = num + 5;
  }
  console.log(risultato);
}
// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

/*
-- Risposta 1

Questa funzione attraverso un ciclo for logga in console i numeri da 0 a 4
*/

/*
-- Risposta 2

Sono presenti errori di sintassi, nel ciclo for va utilizzato il ; e non la ,
*/

/*
-- Risposta 3

Sono presenti errori logici, per loggare anche il numero 5 bisogna far continuare
il loop fino a quando i è minore / uguale a 5 
*/

// Soluzione - esercizio tre
function loopToFive() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
}

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

/*
-- Risposta 1

Questa funzione attraverso un ciclo for inserisce in un array vuoto
tutti i numeri pari partendo dall'array numbers
*/

/*
-- Risposta 2

Sono presenti errori di sintassi, il ; dopo i++ e dopo le parentesi dell'if
e il = 0 dopo l'operatore modulo
*/

/*
-- Risposta 3

Sono presenti errori logici,
sostituire:
- i < numbers.length - 1 con i < numbers.length
- if (numbers % 2 = 0); con if (numbers[i] % 2 === 0)
- evenNumbers.push(i); con evenNumbers.push(numbers[i]);
*/

// Soluzione - esercizio 4
function displayEvenNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  console.log(evenNumbers);
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
