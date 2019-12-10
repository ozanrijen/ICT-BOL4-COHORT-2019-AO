var titel = document.getElementById("title");
var description = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventory = document.getElementById("inventoryItem");
var map = document.getElementById("maps");
var game = document.getElementById("game-container");

var naam = prompt("What username would you like to have?");

function StartGame() {
    document.body.style.background = "url(assets/img/start/background.jpg)";
    document.body.style.backgroundSize = "cover";
    button1.style.display = "none";
    button3.style.display = "none";
    button2.style.marginTop = "580px";
    button2.style.marginLeft = "690px";
    button2.style.padding = "14px 40px";
    button2.style.borderRadius = "8px";
    button2.style.borderColor = "black";
    button2.style.backgroundColor = "black";
    button2.style.boxShadow = "5px 5px 5px black";
    button2.style.color = "white";
    button2.innerText = "Play";
    button2.setAttribute("onclick","StartMap()");

    map.style.display = "none";
    inventory.style.display = "none";
}

function StartMap() {
    gameContainer();
    buttonsClass(3);
    button2.style.padding = "0px";
    button2.innerText = "Continue";
    button1.style.opacity = "0%";
    button3.style.opacity = "0%";
    document.body.style.background = "url(assets/img/maps/START.jpg)";
    document.body.style.backgroundSize = "cover";
    button1.style.display = "inline-block";
    button3.style.display = "inline-block";
    
    titel.innerText = "Home sweet home";
    description.innerText = "Goodevening " + naam + ",\n You are on your way home. Your mother is waiting for you. She made Dinner for you.\n You'll arrive in 10 seconds.";
    button2.setAttribute("onclick","homeMap()");
}
 
function homeMap() {
    document.body.style.background = "url(assets/img/maps/HOME.jpg"
    document.body.style.backgroundSize = "cover"

    titel.innerText = "Dinner time"
    description.innerText = "Maria(Mother): Let's pray.\n Francesica(Sister): Alright, mother.\n\n Your mother descided to pray first. What will you do?"
    button1.innerText = "Don't Pray"
    button2.innerText = "Pray"
    button3.innerText = "Eat"
    button3.style.opacity = "100%"
    button1.style.opacity = "100%"
    button1.setAttribute("onclick","homeDont()")
    button2.setAttribute("onclick","homePray()")
    button3.setAttribute("onclick","homeEat()")
}

function homeEat() {
    titel.innerText = "Dinner time"
    description.innerText = "Maria: I said pray!"
    button1.style.opacity = "0%"
    button3.style.opacity = "0%"
    button1.innerText = "Pray"
    button1.setAttribute("onclick","homePray()")
}

function homePray() {
    titel.innerText = "Dinner time"
    description.innerText = "Maria: Now let's eat. So how was jail? " + naam + ": Well I spoke to Joe and he helped me out.\n Maria: Stay away from that kid, he only brings you in trouble. " + naam + ": No, he's one of my best friends!"
    button1.setAttribute("onclick","storyLine()")
    button1.innerText = "Continue";
    button1.style.opacity = "100%"
    button2.style.opacity = "0%"
    button3.style.opacity = "0%"
}

function homeDont() {
    titel.innerText = "Dinner time"
    description.innerText = "Maria: I said pray!"
    button1.style.opacity = "0%"
    button3.style.opacity = "0%"
    button1.innerText = "Pray"
    button1.setAttribute("onclick","homePray()")
}

function storyLine() {
    titel.innerText = "Choose your storyline"
    description.innerText = "Alright " + naam + ", you have 3 storylines.\n Choose one of the storylines."
    button1.innerText = "Robbery"
    button2.innerText = "Document"
    button1.setAttribute("onclick","robberyStory()")
    button2.setAttribute("onclick","documentStory()")
    button2.style.opacity = "100%"
}

function robberyStory() {
    titel.innerText = "Joe's Plan"
    description.innerText = naam + ": Mother, I am going to Joe's place. Maria: *sigh*.\n"+ naam + ": Mother, we'll be fine. I'll be a good boy."
    button1.innerText = "Leave"
    button1.setAttribute("onclick","robberyPART1()")
    button2.style.opacity = "0%"
}

function robberyPART1() {
    titel.innerText = "Outside"
    description.innerText = "You're now outside. Take a taxi."
    document.body.style.background = "url(assets/img/maps/OUTSIDE.png)"
    button1.innerText = "Go"
    button1.setAttribute("onclick","robberyPART2()");
}

function robberyPART2() {
    titel.innerText = "On your way"
    description.innerText = "You're now on your way to a café where you will meet up with your best mate Joe."
    button1.innerText = "Okay"
    button1.setAttribute("onclick","robberyPART3()");
}

function robberyPART3() {
    titel.innerText = "You arrived"
    description.innerText = "You're now inside, you sat down somewhere and suddenly a lady joins you."
    button1.innerText = "Flirt"
    button2.innerText = "Ignore"
    button1.setAttribute("onclick","robberyFLIRT()");
    button2.setAttribute("onclick","robberyIGNORE()");
}

function robberyFLIRT() {
    titel.innerText = "You arrived"
    description.innerText = naam + ": What's your name? Girl: Why do you wanna know? " + naam + ": A pretty girl like you should have a pretty name aswell. Girl: Hmm.. Joe: He-heeey! That's my boy! How have you been, " + naam + "? " + naam + "Good, let's talk somewhere else."
    button1.innerText = "Flirt"
    button1.setAttribute("onclick","robberyPART4()");
}

function robberyIGNORE() {
    titel.innerText = "You arrived"
    description.innerText = "You're now inside, you sat down somewhere and suddenly a lady joins you."
    button1.innerText = "Flirt"
    button2.innerText = "Ignore"
    button1.setAttribute("onclick","robberyFLIRT()");
    button2.setAttribute("onclick","robberyIGNORE()");
}

function robberyPART4() {
    titel.innerText = "On your way"
    description.innerText = "You're now on your way to a café where you will meet up with your best mate Joe."
    button1.innerText = "Okay"
    button1.setAttribute("onclick","robberyPART3()");
}
function robberyPART5() {
    titel.innerText = "On your way"
    description.innerText = "You're now on your way to a café where you will meet up with your best mate Joe."
    button1.innerText = "Okay"
    button1.setAttribute("onclick","robberyPART3()");
}

function switchStory() {
    titel.innerText = "On your way"
    description.innerText = "You're now on your way to a café where you will meet up with your best mate Joe."
    button1.innerText = "Okay"
    button1.setAttribute("onclick","robberyPART3()");
}

function finalStory_1() {
    titel.innerText = "On your way"
    description.innerText = "You're now on your way to a café where you will meet up with your best mate Joe."
    button1.innerText = "Okay"
    button1.setAttribute("onclick","robberyPART3()");
}

function finalStroy_2() {
    titel.innerText = "On your way"
    description.innerText = "You're now on your way to a café where you will meet up with your best mate Joe."
    button1.innerText = "Okay"
    button1.setAttribute("onclick","robberyPART3()");
}

function finalStory_3() {
    titel.innerText = "On your way"
    description.innerText = "You're now on your way to a café where you will meet up with your best mate Joe."
    button1.innerText = "Okay"
    button1.setAttribute("onclick","robberyPART3()");
}

StartGame();





















































































































































































