# Calcolo del prezzo del biglietto del treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
Va applicato uno sconto del 20% per i minorenni.
Va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

# Soluzione 

**Raccolta Dati** 

1. Chiedere a utente il numero km che vuole percorrere.
2. Chiedere a utente l'età. 

**Logica**

1. Calcolare il prezzo del biglietto moltiplicando il costo per km ai km che desidera percorrere l'utente.
2. Nel caso in cui l'utente abbia età sepcifica verrà in base ai criteri sopra citati applicato un determinato sconto. Ovvero calcolare lo sconto e sottrarlo dal risultato del prezzo che uscirà al calcolo.
3. Infine andremo a cambiare il risultato in forma umana con massimo due decimali.

**Output**

1. Stampare il messaggio finale.