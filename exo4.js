var pu = parseInt(prompt ("Saissisez le prix Unitaire")); // Produit Unitaire //
var qte = parseInt(prompt ("Saissisez la quantité")); // Quantité //
var pap = 0; // Prix a Payer //
var rem = 0; // Remise //
var port = 0; // Frais de Port //
var tot = 0; // Produit Unitaire x Quantité //

tot = (pu * qte)

if (tot >=100 && tot <=200) { // Cela s'applique uniquement si le Prix a Payer(pap) est entre 100 et 200 //
    rem = tot * 5/100; // La Remise(rem) est de 5% si le total est entre 100 et 200 //
}
else if (tot >200) { // Cela s'applique uniquement si le Prix a Payer(pap) est a plus de 200 //
    rem = tot * 10/100; // La Remise(rem) est de 10% si le total est a plus de 200 //
}
else {
    rem = 0;
}
if ((tot - rem) <500) { // Cela s'applique uniquement si le Prix a Payer(pap) est a plus de 500 //
    port = (tot - rem) *2/100; // La valeur des frais de port(port) est de 2% //
}
else {
    port = 0;
}

if (port != 0 && port <6) {
    port = 6
}
pap = (tot - rem) + port

console.log ("Prix Total " + pap + " La remise est " + rem + " Les frais de port " + port);