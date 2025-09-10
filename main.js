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

//-- MILESTONES 1 & 2--//

//-- FUNZIONE & VARIABILI --//
const calcolaPrezzo = document.getElementById("calcolo");

calcolaPrezzo.addEventListener("click", () => { //Generazione dell'evento al click

    let inKm = document.getElementById("km").value; //Input kilometraggio
    let inAge = document.getElementById("age").value; //Input età

    const costBase = 0.21; //Variazione del prezzo base €/km

    let fullPrice = (inKm * costBase); //Variabile senza variazione di discount (base)

    let discountPrice; //Settaggio variabile senza info numeriche
    let typoTicket; //Settaggio variabile senza info scritte

    //Settaggio per impostazione Burger Menu
    if (inAge === minors) { 
        typoTicket = "ScontoMinorenni"; //Impostazione tipologia di ticket
        discountPrice = 0.20; //Impostazione discount per minorenni

    } else if (inAge === over) {
        typoTicket = "ScontoOver-65"; //Impostazione tipologia di ticket
        discountPrice = 0.4; //Impostazione discount per over 65
        
    } else if (inAge === major) {
        typoTicket = "Standard"; //Impostazione tipologia di ticket
        discountPrice = 0; //Impostazione senza sconti
        
    }

    let finalPrice = fullPrice - (fullPrice * discountPrice); //Calcolo dello sconto sul prezzo intero
    let totalFinalPrice = finalPrice.toFixed(2); //Formattazione per massimo 2 decimali
    
    document.getElementById("promo").innerHTML = typoTicket; //Output tipologia di sconto
    document.getElementById("finalCost").innerHTML = totalFinalPrice + " €"; //Output del prezzo finale
    document.getElementById("nameOnTicket").innerHTML = document.getElementById("nameSurname").value //Output dei dati anagrafici

    let randomCarriage = Mathfloor(Math.random() * 15); //Generazione random del numero della carrozza
    document.getElementById("carriage").innerHTML = randomCarriage; //Output numero carrozza

    let randomCodeCp = Mathfloor(Math.random() * 999999); //Generazione random di un codice CP
    document.getElementById("codeCp").innerHTML = randomCodeCp; //Output del codice CP

});

//-- SETTAGGIO PULSANTE DI CANCELLAZIONE DEL FORM --//
const buttonReset = document.getElementById("Annulla"); //Generazione dell'evento al click
buttonReset.addEventListener("click", () => {
    document.getElementById("nameSurname").value = "";
    document.getElementById("km").value = "";
    document.getElementById("promo").innerHTML = "";
    document.getElementById("carriage").innerHTML = "";
    document.getElementById("codeCp").innerHTML = "";
    document.getElementById("finalCost").innerHTML = "00.0 €";
});

document.getElementById("finalCost").innerHTML = "00.0 €";

//-- MILESTONE 3 --//
//-- cit. "Return to Masadora!" aka return tu index.html --//