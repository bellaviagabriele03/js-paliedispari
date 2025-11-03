// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (NON usare split, reverse e join)


//es parole palindrome : "esse", "oro", "anna", "ada", "radar", "ingegni", "irti" ......



//dichiaro la variabile choose e le assegno la parola data dall'utente attraverso il prompt 
let choose = prompt("inserisci una parola");
console.log(choose);


// per effetturare il controllo sulle parole usero un ciclo for all'interno della mia funzione:
// prendo la parola data dall'utente 
// inizio a ciclare le lettere della parola 
// e le salvo in una nuova variabile temporanea invertite (cioè prima l'ultima poi la penultima e cosi via...)
// in fine controllo con un if se le due parole sono uguali e stampo i risultati ottenuti 


//funzione:
//parametro : la parola data dall'utente
//return: stringa ("la parola è palindroma" / "la parola non è palindroma")

function wordPali(choose) {
    let reverseWord = "";
    for (let i = choose.length - 1; i >= 0; i--) {
        reverseWord = reverseWord + choose[i];
    }

    return reverseWord === choose;
}


let result = wordPali(choose);
console.log(result);



