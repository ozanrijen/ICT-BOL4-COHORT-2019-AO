var stemWijzer = document.getElementById("stemWijzer");
var H1STELLING = document.createElement("h1");
H1STELLING.id = "stelling";
var BUTTONS = document.createElement("div");
BUTTONS.id = "buttons";
stemWijzer.appendChild(H1STELLING);
stemWijzer.appendChild(BUTTONS);
var BUTTONEENS = document.createElement("button");
BUTTONEENS.id = "btnEens";
var BUTTONONEENS = document.createElement("button");
BUTTONONEENS.id = "btnOneens";
var BUTTONVOLGENDE = document.createElement("button");
BUTTONVOLGENDE.id = "btnVolgende";
BUTTONS.appendChild(BUTTONEENS);
BUTTONS.appendChild(BUTTONONEENS);
BUTTONS.appendChild(BUTTONVOLGENDE);

var btnEens = document.getElementById("btnEens");
btnEens.innerHTML = "Eens";
var btnOneens = document.getElementById("btnOneens");
btnOneens.innerHTML = "Oneens";
var btnVolgende = document.getElementById("btnVolgende");
btnVolgende.innerHTML = "Volgende";
var h1Stelling = document.getElementById("stelling");
var uitslag = document.getElementById("uitslag");




btnVolgende.style.display = "none";
uitslag.style.overflow = "visable";

var volgende = 1;
h1Stelling.innerHTML = stellingen[0];

var antwoord = 0;
var vragen = 0;
var eens = 0;
var oneens = 0;

btnEens.onclick = function() {
    antwoord++
    eens++
    btnEens.style.display = "none";
    btnOneens.style.display = "none";
    btnVolgende.style.display = "inline-block";
    uitslag.innerText = "Eens (" + eens + "/" + oneens + ") Oneens"
}

btnOneens.onclick = function() {
    antwoord++
    oneens++
    btnEens.style.display = "none";
    btnOneens.style.display = "none";
    btnVolgende.style.display = "inline-block";
    uitslag.innerText = "Eens (" + eens + "/" + oneens + ") Oneens"
}

btnVolgende.onclick = function() {
    vragen++
    btnEens.style.display = "inline-block";
    btnOneens.style.display = "inline-block";
    btnVolgende.style.display = "none";
    h1Stelling.innerHTML = stellingen[volgende++];

    if (vragen == 9) {
        btnVolgende.innerHTML = "Afronden";
        btnVolgende.setAttribute("onclick", "Afronden()");
    }
}

function Afronden() {
    if (eens >= 8) {
        partij = "D66";
    } else if (eens == 5 || eens == 6 || eens == 7) {
        partij = "PvdA";
    } else if (eens == 2 || eens == 3 || eens == 4) {
        partij = "VVD";
    } else if (eens < 2) {
        partij = "CDA";
    }
    stemWijzer.removeChild(H1STELLING);
    var p = document.createElement("p");

    stemWijzer.appendChild(p);
    p.innerHTML = "U heeft " + eens + " keer EENS gestemd. De partij die het beste bij uw voorkeur past is " + partij + ".";
    console.log(partij);
    console.log(eens);
}
