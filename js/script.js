const userKm = parseInt(prompt("Quanti km vuoi percorrere?"));
const userAge = parseInt(prompt("Quanti anni hai?"))
console.log ("anni", userAge);
let price = (userKm * 0.21);
console.log ("prezzo", price);

let discount = 0;

if (userAge < 18) {
    discount = Math.floor ((price * 20) / 100);
    console.log ("sconto minorenni", discount);
}
else if (userAge > 64) {
    discount = Math.floor ((price * 40) / 100);
    console.log ("sconto senior", discount);
} 
let result = (price-discount);
console.log ("risultato", result);

document.getElementById("calc").innerHTML ="Il tuo biglietto costa " + result;