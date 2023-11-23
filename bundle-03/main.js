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

// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
// const cars = [
//   {
//     manufacturer: "Ford",
//     model: "Fiesta",
//     type: "diesel",
//   },
//   {
//     manufacturer: "Audi",
//     model: "A1",
//     type: "benzina",
//   },
//   {
//     manufacturer: "Volkswagen",
//     model: "Golf",
//     type: "Benzina",
//   },
//   {
//     manufacturer: "Fiat",
//     model: "Panda",
//     type: "metano",
//   },
//   {
//     manufacturer: "Fiat",
//     model: "Multipla",
//     type: "GPL",
//   },
//   {
//     manufacturer: "Tesla",
//     model: "Model 3",
//     type: "elettrico",
//   },
//   {
//     manufacturer: "Volkswagen",
//     model: "Polo",
//     type: "benzina",
//   },
//   {
//     manufacturer: "Ford",
//     model: "Kuga",
//     type: "Diesel",
//   },
//   {
//     manufacturer: "Seat",
//     model: "Ibiza",
//     type: "metano",
//   }
//   {
//     manufacturer: "Audi",
//     model: "R8",
//     type: "Benzina",
//   },
// ];

// const gasolineCars = cars.filter(auto >= auto.type === "benzina");

// const dieselCars = cars.filter((auto) => {
//   auto.type === "diesel";
// });

// const otherCars = cars.filter((auto) => {
//   return auto.type !== "benzina" || auto.type !== "diesel";
// });

// console.log("Auto a benzina");
// console.log("*******************************");
// console.log(gasolineCars);

// console.log("Auto a diesel");
// console.log("*******************************");
// console.log(dieselCars);

// console.log("Tutte le altre auto");
// console.log(otherCars);

/*
Risposta 1

Questo codice dato un array di oggetti di auto (proprietà: manufacturer, model, type)
attraverso il metodo degli arrey filter va ad estrapolare e successivamente a loggare in console
i vari oggetti per tipo
*/

/*
Risposta 2

Si, sono presenti errori di sintassi:
- la virgola nel penultimo oggetto dell'array dopo le {}
- arrow function nel primo filter invertire simboli >= in <=
- aggiungere il metodo .toLowerCase() ai vari type nei filter
- aggiungere il return nel filter per le macchine diesel
(non essendo su una riga il return deve essere esplicito)
- nel filter per le altre macchine sostituire || (or) con && (and)
*/

/*
Risposta 3

Non sono presenti errori di tipo logico
*/

// Soluzione - esercizio 1
const cars = [
  {
    manufacturer: "Ford",
    model: "Fiesta",
    type: "diesel",
  },
  {
    manufacturer: "Audi",
    model: "A1",
    type: "benzina",
  },
  {
    manufacturer: "Volkswagen",
    model: "Golf",
    type: "Benzina",
  },
  {
    manufacturer: "Fiat",
    model: "Panda",
    type: "metano",
  },
  {
    manufacturer: "Fiat",
    model: "Multipla",
    type: "GPL",
  },
  {
    manufacturer: "Tesla",
    model: "Model 3",
    type: "elettrico",
  },
  {
    manufacturer: "Volkswagen",
    model: "Polo",
    type: "benzina",
  },
  {
    manufacturer: "Ford",
    model: "Kuga",
    type: "Diesel",
  },
  {
    manufacturer: "Seat",
    model: "Ibiza",
    type: "metano",
  },
  {
    manufacturer: "Audi",
    model: "R8",
    type: "Benzina",
  },
];

const gasolineCars = cars.filter(
  (auto) => auto.type.toLowerCase() === "benzina"
);

const dieselCars = cars.filter((auto) => {
  return auto.type.toLowerCase() === "diesel";
});

const otherCars = cars.filter((auto) => {
  return (
    auto.type.toLowerCase() !== "benzina" &&
    auto.type.toLowerCase() !== "diesel"
  );
});

console.log("Auto a benzina");
console.log("*******************************");
console.log(gasolineCars);

console.log("Auto a diesel");
console.log("*******************************");
console.log(dieselCars);

console.log("Tutte le altre auto");
console.log(otherCars);
