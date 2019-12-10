//Oguzhan Korucu
//Applicatie Ontwikkeling Niveau 4
//Simpele Pizza Calculator


document.write('<center>');
var small = prompt("$6.50 - Hoeveel small pizza's wil je?"); //de vraag die je als eerst krijgt.
var prijs = 6.50 //dit is wat je betaald voor een small pizza.
document.write("Hoeveelheid Pizza's: ",small+" "+"Small: $",small*prijs+"<br>") //rekent de prijs uit op aantal.

var medium = prompt("$8.50 - Hoeveel medium pizza's wil je?"); //de vraag die je als eerst krijgt.
var prijs2 = 8.50 //dit is wat je betaald voor een medium pizza.
document.write("Hoeveelheid Pizza's: ",medium+" "+"Medium: $",medium*prijs2+"<br>"); //rekent de prijs uit op aantal.

var large = prompt("$11.50 - Hoeveel large pizza's wil je?"); //de vraag die je als eerst krijgt.
var prijsmlarge = 11.50 //dit is wat je betaald voor een large pizza.
document.write("Hoeveelheid Pizza's: ",large+" "+"Large: $",large*prijsmlarge+"<br>"); //rekent de prijs uit op aantal.

var totaalsmall = small*prijs;
var totaalmedium = medium*prijs2;
var totaallarge = large*prijsmlarge;

document.write("Totaal Prijs: $",(totaallarge+totaalmedium+totaalsmall).toFixed(2));
document.write('<center>');