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

//--STEPS--//

//INFO BASE

const ticketCost = 0.21; //Prezzo base €/km
console.log(`Il prezzo del biglietto è di ${ticketCost}€/km`)

//RICHIESTA DATI

const age = prompt("Qual'è la tua età?") //Richiesta dell'età
const km = prompt("Per quanti km vuoi viaggiare?") //Richiesta del percorrimento dei km
console.log(`Hai ${age} anni e vuoi viaggiare per ${km}km`)

//SCONTISTICHE

const discountMinors = 20; //Sconto minorenni
const discountOlders = 40; //Sconto over 65

if(age <= 17) {
    console.log(`In quanto Under 18, hai diritto allo sconto del 20%`);
} else if(age >= 65) {
    console.log(`In quanto Over 65, hai diritto allo sconto del 40%`);
}

//CALCOLO DELLE SCONTISTICHE

const sumDiscMinors = ((ticketCost * km) / 100) * discountMinors; //Calcolo discount Under 18
const sumDiscOlders = ((ticketCost * km) / 100) * discountOlders; //Calcolo discount Older 65

//CALCOLO DEI TOTALI PER PERSONA

const sumMinors = (ticketCost * km) - sumDiscMinors; //Calcolo tot Under 18
const sumOlders = (ticketCost * km) - sumDiscOlders; //Calcolo tot Older 65
const sumFullPrice = (ticketCost * km); //Calcolo tot no discount

if (age <= 17) {
    console.log(`Con lo sconto applicato, il totale da pagare è ${sumMinors.toFixed(2)}€`);
} else if ((age >= 18) && (age <64)) {
    console.log(`Il totale da pagare è di ${sumFullPrice.toFixed(2)}€`);
}  else {
    console.log(`Con lo sconto applicato, il totale da pagare è ${sumOlders.toFixed(2)}€`);
}