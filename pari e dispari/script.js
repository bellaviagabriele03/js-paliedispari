// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


let choose = prompt("pari o dispari?");
let chooseNumber = parseInt(prompt("dammi un numero da 1 a 5"));

//Funzione per generare un numero random da 1 a 5
//e per calcolare la somma tra il numero dato dall'utente e quello generato
// parametri: nessuno
//return: somma dei due numeri 
function getRandomNumber() {
    let randomNumber = parseInt(Math.floor(Math.random() * 5) + 1);
    console.log("Il computer ha scelto:", randomNumber);

    let sum = chooseNumber + randomNumber;
    return sum;
}

//Dichiaro la variabile result e le assegno la somma calcolata dalla funzione getRandomNumber
let result = getRandomNumber();

//stampo il numero scelto dall'utente
console.log("Il numero dell'utente è:", chooseNumber);

//stampo la somma calcolata dalla funzione
console.log("La somma dei due numeri è:", result);
//stampo cos'ha scelto l'utente (se pari o dispari)
console.log("L'utente ha scelto:", choose);


//controllo sulla vincita:
//dichiaro la variabile decreto come una stringa vuota
//se l'utente a scelto pari e la somma dei numeri è un numero pari 
//  allora stampo la scritta hai vinto
//  altrimenti non faccio nulla 
//fuori dal mio controllo stampo la variabile decreto che a seconda delle condizioni cambierà

let decreto = "Hai perso!!";
if (choose === "pari" && result % 2 === 0) {
    decreto = "Hai vinto!!";
}else if (choose === "dispari" && result % 2 !== 0) {
    decreto = "Hai vinto!!";
}

//stampo il decreto finale
console.log("Il giudice decide che:", decreto);



