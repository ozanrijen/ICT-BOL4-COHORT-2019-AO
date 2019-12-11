var titel = document.getElementById("title");
var description = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventory = document.getElementById("inventoryItem");
var game = document.getElementById("game-container");

var naam = prompt("What username would you like to have?", "Vito");

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
    inventory.style.display = "none";
}

function StartMap() {
    gameContainer();
    buttonsClass(3);
    button2.style.padding = "0px";
    button2.innerText = "Continue";
    button1.style.display = "none";
    button2.style.display = "inline-block";
    button3.style.display = "none";
    document.body.style.background = "url(assets/img/maps/START.jpg)";
    document.body.style.backgroundSize = "cover";
    
    titel.innerText = "Home sweet home";
    description.innerText = "Goodevening " + naam + ",\n You are on your way home. Your mother is waiting for you. She made Dinner for you.\n You'll arrive in 10 seconds.";
    button2.setAttribute("onclick","homeMap()");
}
 
function homeMap() {
    document.body.style.background = "url(assets/img/maps/HOME.jpg";
    document.body.style.backgroundSize = "cover";

    titel.innerText = "Dinner time";
    description.innerText = "Maria(Mother): Let's pray.\n Francesica(Sister): Alright, mother.\n\n Your mother descided to pray first. What will you do?"
    button1.innerText = "Don't Pray";
    button2.innerText = "Pray";
    button3.innerText = "Eat";
    button3.style.display = "inline-block";
    button1.style.display = "inline-block";
    button1.setAttribute("onclick","homeDont()");
    button2.setAttribute("onclick","homePray()");
    button3.setAttribute("onclick","homeEat()");
}

function homeEat() {
    titel.innerText = "Dinner time";
    description.innerText = "Maria: I said pray!";
    button1.style.display = "none";
    button3.style.display = "none";
    button1.innerText = "Pray";
    button1.setAttribute("onclick","homePray()");
}

function homePray() {
    titel.innerText = "Dinner time";
    description.innerText = "Maria: Now let's eat. So how was jail? " + naam + ": Well I spoke to Joe and he helped me out.\n Maria: Stay away from that kid, he only brings you in trouble. " + naam + ": No, he's one of my best friends!"
    button1.setAttribute("onclick","storyLine()");
    button1.innerText = "Continue";
    button1.style.display = "inline-block";
    button2.style.display = "none";
    button3.style.display = "none";
}

function homeDont() {
    titel.innerText = "Dinner time";
    description.innerText = "Maria: I said pray!";
    button3.style.display = "none";
    button1.style.display = "none";
    button1.innerText = "Pray";
    button1.setAttribute("onclick","homePray()");
}

function storyLine() {
    titel.innerText = "Choose your storyline";
    description.innerText = "Alright " + naam + ", you have 2 storylines.\n Choose one of the storylines.";
    button1.innerText = "Robbery";
    button2.innerText = "Document";
    button1.setAttribute("onclick","breakStory()");
    button2.setAttribute("onclick","Death()");
    button2.style.display = "inline-block";
}

function breakStory() {
    titel.innerText = "Joe's Plan";
    description.innerText = naam + ": Mother, I am going to Joe's place. Maria: *sigh*.\n"+ naam + ": Mother, we'll be fine. I'll be a good boy."
    button1.innerText = "Leave";
    button1.setAttribute("onclick","breakPART1()");
    button2.style.display = "none";
}

function breakPART1() {
    titel.innerText = "Outside";
    description.innerText = "You're now outside. Take a taxi.";
    document.body.style.background = "url(assets/img/maps/OUTSIDE.png)";
    button1.innerText = "Go";
    button1.setAttribute("onclick","breakPART2()");
}

function breakPART2() {
    titel.innerText = "On your way";
    description.innerText = "You're now on your way to a café where you will meet up with your best mate Joe.";
    button1.innerText = "Okay";
    button1.setAttribute("onclick","breakPART3()");
}

function breakPART3() {
    titel.innerText = "You arrived";
    description.innerText = "You're now inside, you sat down somewhere and suddenly a lady joins you.";
    button1.innerText = "Flirt";
    button2.innerText = "Ignore";
    button1.setAttribute("onclick","breakFLIRT()");
    button2.setAttribute("onclick","breakIGNORE()");
    document.body.style.background = "url(assets/img/maps/ROMANTIC.jpg)";
    document.body.style.backgroundSize = "cover";
    button2.style.display = "inline-block";
}

function breakFLIRT() {
    titel.innerText = "Café";
    description.innerText = naam + ": What's your name? Girl: Why do you wanna know? " + naam + ": A pretty girl like you should have a pretty name aswell. Girl: Hmm.. Joe: He-heeey! That's my boy! How have you been, " + naam + "? " + naam + ": Good, let's talk somewhere else."
    button1.innerText = "Go";
    button1.setAttribute("onclick","breakPART4()");
    document.body.style.background = "url(assets/img/maps/ROMANTIC.jpg)";
    document.body.style.backgroundSize = "cover";
    button2.style.display = "none";
}

function breakIGNORE() {
    titel.innerText = "Café";
    description.innerText = "Joe: He-heeey! That's my boy! How have you been, " + naam + "? " + naam + ": Good, let's talk somewhere else."
    button1.innerText = "Go";
    button1.setAttribute("onclick","breakPART4()");
    button2.style.display = "none";
    document.body.style.background = "url(assets/img/maps/ROMANTIC2.jpg)";
    document.body.style.backgroundSize = "cover";
}
function breakPART4() {
    titel.innerText = "Important Job";
    description.innerText = "Alright " + naam + ", I had this idea to rob the jewelry near the museum. If we slip through the mall we can get easy access to the jewelry store. I thought everything through so you don't have to worry a thing. Here is a Korth Magnum. It's from those German fucks. I'll give it once we're in.\n Okay now, you should think about it. Becuase I also have something else so you tell me."
    button1.innerText = "Okay";
    document.body.style.background = "url(assets/img/maps/JOE.jpg)";
    button1.setAttribute("onclick","R_PART1()");
}

function R_PART1() {
    titel.innerText = "Robbery";
    description.innerText = "Joe: Here, take this lockpicker. Use it to open this door.";
    document.body.style.background = "url(assets/img/maps/R_PART1.png";
    document.body.style.backgroundSize = "cover";
    inventory.src = "assets/img/items/lockpick.png"; //true
    inventory.style.display = "inline-block";
    button2.style.display = "none";
    button1.innerText = "Yes";
    button2.innerText = "No";
    button2.style.display = "inline-block";
    button1.setAttribute("onclick","R_PART2()");
    button2.setAttribute("onclick","Alert_1()");
}

function Alert_1() {
    description.innerText = "Joe: Open the goddamn door! We haven't got much time!";
    button2.style.display = "none";
    button1.innerText =  "Continue";
}

function Alert_2() {
    description.innerText = "Joe: Take the gun. Just for safety reasons. Like in the good old days.";
    button1.innerText = "Move on";
    button1.setAttribute("onclick","R_PART3()");
}

function R_PART2() {
    titel.innerText = "Inside";
    description.innerText = "Good, we're in. Here's your gun. Take everything you can carry.";
    document.body.style.background = "url(assets/img/maps/R_PART2.png";
    document.body.style.backgroundSize = "cover";
    inventory.src = "assets/img/items/gun.png";
    button2.style.display = "none"
    button1.innerText = "Don't";
    button1.setAttribute("onclick","Alert_2()");
}

function R_PART3() {
    titel.innerText = "Inside";
    description.innerText = "Joe: Don't forget to check in the back!";
    document.body.style.background = "url(assets/img/maps/R_PART3.png";
    document.body.style.backgroundSize = "cover";
    button1.innerText = "Continue";
    button1.setAttribute("onclick","R_PART4()");
}

function R_PART4() {
    titel.innerText = "Joe's fear";
    description.innerText = "*Car sounds*";
    document.body.style.background = "url(assets/img/maps/R_PART4.png";
    document.body.style.backgroundSize = "cover";
    button1.innerText = "Continue";
    button1.setAttribute("onclick","R_PART5()");
}

function R_PART5() {
    titel.innerText = "Mall";
    description.innerText = "...";
    document.body.style.background = "url(assets/img/maps/R_PART5.png";
    document.body.style.backgroundSize = "cover";
    button1.innerText = "Continue";
    button1.setAttribute("onclick","R_PART6()");
}

function R_PART6() {
    titel.innerText = "Silence";
    description.innerText = "Joe: Ssh, stay low..";
    document.body.style.background = "url(assets/img/maps/R_PART6.png";
    document.body.style.backgroundSize = "cover";
    button1.innerText = "Get down";
    button1.setAttribute("onclick","R_PART7()");
}

function R_PART7() {
    titel.innerText = "Plot twist";
    description.innerText = "Joe: What the fuck is going in here?!";
    document.body.style.background = "url(assets/img/maps/R_PART7.png";
    document.body.style.backgroundSize = "cover";
    button1.innerText = "Continue";
    button1.setAttribute("onclick","R_PART8()");
}

function R_PART8() {
    titel.innerText = "Plot twist";
    description.innerText = "Joe: Is that fucking O'Neal? You crazy bastard what the fuck are you doing here? O'Neal: What the hell are you doing here? Joe: You were a little late chief. There is nothing left here for ya. O'Neal: Fuck off fatso, this is our heist. You want to get out of here in one piece you better hide.. Joe: Yeah yeah yeah, it doesn't say Bryan O'Neal's place. If it did I wouldn't be here.";
    document.body.style.background = "url(assets/img/maps/R_PART8.png";
    document.body.style.backgroundSize = "cover";
    button1.innerText = "Shoot them";
    button1.setAttribute("onclick","Alert_3()");
}

function Alert_3() {
    alert("Joe: Hold on, Vito.");
    button1.innerText = "Shoot and run";
    button1.setAttribute("onclick","R_PART9()");
}

function R_PART9() {
    titel.innerText = "Police";
    description.innerText = "Police Radio: Repeat 10-31! West side mall burglary. Cop: This is Cop-54, we're on it.";
    document.body.style.background = "url(assets/img/maps/R_PART9.png";
    document.body.style.backgroundSize = "cover";
    inventory.style.display = "none";
    button1.innerText = "Continue";
    button1.setAttribute("onclick","R_PART10()");
}

function R_PART10() {
    titel.innerText = "RUN!";
    description.innerText = "Joe: Move your ass! Let's go! Go to the roof!";
    document.body.style.background = "url(assets/img/maps/R_PART10.png";
    document.body.style.backgroundSize = "cover";
    inventory.style.display = "inline-block";
    button1.innerText = "Continue";
    button1.setAttribute("onclick","R_PART11()");
}

function R_PART11() {
    titel.innerText = "Escape";
    description.innerText = "We have to move to the other side! " + naam + ": How? Joe: Wait let me check.. There! We can go past the sign. It's a bit dangerous but if you just follow me and keep your balance, you'll be fine.";
    document.body.style.background = "url(assets/img/maps/R_PART11.png";
    document.body.style.backgroundSize = "cover";
    button1.innerText = "Continue";
    button1.setAttribute("onclick","R_PART12()");
}

function R_PART12() {
    titel.innerText = "The End";
    description.innerText = "Thanks for playing my game!\n© Oguzhan Korucu 2019\n\nTo be continued..";
    document.body.style.background = "url(assets/img/maps/END.jpg";
    document.body.style.backgroundSize = "cover";
    button1.innerText = "Restart";
    button1.setAttribute("onclick","Restart()");
    inventory.style.display = "none";
}

function Restart() {
    location.reload();
}

function Death() {
    titel.innerText = "Try again";
    description.innerText = "Documents? What are you talking about.";
    document.body.style.background = "url(assets/img/maps/Death.jpg";
    document.body.style.backgroundSize = "cover";
    button1.innerText = "Try again";
    button1.setAttribute("onclick","StartMap()");
    button2.style.display = "none";
}

StartGame();





















































































































































































