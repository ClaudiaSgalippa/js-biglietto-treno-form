/*Descrizione:

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
La risposta finale (o output) sarà anch’essa da scrivere in console. 

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

Nota:
Se non vi sentite particolarmente creativi, questa (allegato) potrebbe essere un’implementazione da seguire per il terzo milestone. 
Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra. 🎨 */

//-- MILESTONE 1--//

//-- COSTANTI --//
const ticketCost = 0.21; //Prezzo base €/km
const discountMinors = 20; //Sconto minorenni
const discountOlders = 40; //Sconto over 65

//-- BOTTONE --//
const calcolo = document.getElementById("calcolo").addEventListener("click", calcolaPrezzo); //Associamo l'evento al bottone

//-- FUNZIONE --//
function calcolaPrezzo() {

    const km = parseInt(document.getElementById("km").value); //Associamo la costante al dato dei km con il valore
    const age = parseInt(document.getElementById("age").value); //Associamo la costante al dato dell'età con il valore
    let price = km * ticketCost;

    if (age <= 17) {
        price = price - ((price * discountMinors) / 100);

    } else if (age >= 65) {
        price = price - ((price * discountOlders) / 100);

    }
    console.log(`Il prezzo del biglietto è di ${price.toFixed(2)}€/km`);
}

//-- MILESTONE 2 --//

//-- REALIZZAZIONE FORM IN&OUT --//
const inName = document.getElementById("nameSurname"); //Indichiamo da dove prelevare il nome
const inKm = document.getElementById("km"); //Indichiamo da dove prelevare il kilometraggio
const inAge = document.getElementById("age"); //Indichiamo da dove prelevare l'età

const ticketRequest = document.querySelector("#requests"); //Indichiamo a quale form dobbiamo fare riferimento
const buttonCalc = document.getElementById("calcolo"); //Colleghiamo il bottone di generazione del biglietto alla sua funzione
const buttonReset = document.getElementById("delete"); //Colleghiamo il bottone di cancellazione del form alla sua funzione

const outName = document.getElementById("nameOnTicket"); //Indichiamo dove pushare l'elemento del nome
const outTypo = document.getElementById("typology"); //Indichiamo dove pushare la tipologia del biglietto
const outCarriage = document.getElementById("carriage"); //Indichiamo dove pushare la carrozza
const outCodeCp = document.getElementById("codeCp"); //Indichiamo dove pushare il codice CP
const outFinalCost = document.getElementById("finalCost"); //Indichiamo dove pushare il prezzo finale

//-- GENERAZIONE EVENTO --//
ticketRequest.addEventListener("submit", (event) => {
    event.preventDefault(); //Bloccare la trasmissione automatica delle info

})