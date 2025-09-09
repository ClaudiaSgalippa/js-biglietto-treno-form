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

//-- FUNZIONE & VARIABILI --//

function calcolaPrezzo (valueKm, valueAge) {

    const costBase = 0.21; //Variazione del prezzo base €/km
    let option = parseInt(valueAge.value); //Conversione da stringa a valore numerico

    const withoutDiscount = (costBase * valueKm); //Variabile senza variazione di discount (base)

    let finalPrice = 0; //Settaggio variabile senza info numeriche
    let typoTicket = ""; //Settaggio variabile senza info scritte

    if (option === minors) { //Settaggio per impostazione Burger Menu
        finalPrice = withoutDiscount * 0.8; //Impostazione discount per minorenni
        typoTicket = "ScontoMinorenni"; //Impostazione tipologia di ticket

    } else if (option === over) {
        finalPrice = withoutDiscount * 0.6; //Impostazione discount per over 65
        typoTicket = "ScontoOver-65"; //Impostazione tipologia di ticket

    } else if (option === major) {
        finalPrice = withoutDiscount; //Impostazione senza sconti
        typoTicket = "Standard"; //Impostazione tipologia di ticket

    } return {
        price: finalPrice.toFixed(2), //Formattazione per massimo 2 decimali
        typology: typoTicket
    }
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

//-- GENERAZIONE EVENTO DI COMPILAZIONE FORM --//
function casualNumber(min, max){ //Generazione numero casuale
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

ticketRequest.addEventListener("submit", (event) => {
    let priceTicket = calcolaPrezzo(parseFloat(inKm.value), inAge); //Variabile della funzione
    outName.innerHTML = inName.value; //Riporto del nome
    outTypo.innerHTML = priceTicket.typology; //Riporto del tipo di biglietto per età
    outCarriage.innerHTML = casualNumber (1,15); //Generazione random di una carrozza
    outCodeCp.innerHTML = casualNumer (10000, 99999); //Generazione random di un codice CP
    outFinalCost.innerHTML = priceTicket.price + "€"; //Riporto del prezzo finale
    event.preventDefault(); //Bloccare la trasmissione automatica delle info
});

//-- GENERAIONE DI EVENTO DI CANCELLAZIONE DEL FORM --//
buttonReset.addEventListener("click", () => {
    ticketRequest.reset();
    outName.innerHTML = "";
    outTypo.innerHTML = "";
    outCarriage.innerHTML = "";
    outCodeCp.innerHTML = "";
    outFinalCost.innerHTML = "";
});

//-- MILESTONE 3 --//
//-- cit. "Return to Masadora!" aka Return tu index.html --//

// CODICE LAVORATO PRIMA DI ELABORARE IN TOTO LA RICHIESTA
//-- VARIABILI --//
//const discountMinors = 20; //Sconto minorenni //COSTANTE RIELABORATA PER ADATTAMENTO ALL'IMPOSTAZIONE BURGER
//const discountOlders = 40; //Sconto over 65 //COSTANTE RIELABORATA PER ADATTAMENTO ALL'IMPOSTAZIONE BURGER

//-- BOTTONE --//
//const calcolo = document.getElementById("calcolo").addEventListener("click", calcolaPrezzo); //Associamo l'evento al bottone //COSTANTE RIELABORATA PER ADATTAMENTO ALL'IMPOSTAZIONE BURGER

//-- FUNZIONE --//
//function calcolaPrezzo() { //FUNZIONE RIELABORATA PER ADATTAMENTO ALL'IMPOSTAZIONE BURGER
//
//    const km = parseInt(document.getElementById("km").value); //Associamo la costante al dato dei km con il valore
//    const age = parseInt(document.getElementById("age").value); //Associamo la costante al dato dell'età con il valore
//    let price = km * ticketCost;
//
//    if (age <= 17) {
//        price = price - ((price * discountMinors) / 100);
//
//    } else if (age >= 65) {
//        price = price - ((price * discountOlders) / 100);
//
//    }
//    console.log(`Il prezzo del biglietto è di ${price.toFixed(2)}€/km`);
//}


