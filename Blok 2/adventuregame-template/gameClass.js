function gameContainer() {
    game.style.display = "block";
    game.style.width = "50%";
    game.style.height = "10px auto";
    game.style.margin = "0 auto";
    game.style.backgroundColor = "black";
    game.style.border = "4px solid maroon";
    game.style.color = "white";
    game.style.textAlign = "center";
    game.style.opacity = "0.7";
}

function buttonsClass(qty) {
        for (i = 1; i <= qty; i++) {
            document.getElementById("button"+i);
        }
        button2.style.marginTop = "15px";
        button2.style.marginLeft = "0px";
        button2.style.marginBottom = "15px"
        button2.style.borderColor = "maroon"
        button2.style.borderRadius = "3px"
        button2.style.padding = "0px"
        button1.style.borderColor = "maroon"
        button1.style.borderRadius = "3px"
        button1.style.padding = "0px"
        button3.style.borderColor = "maroon"
        button3.style.borderRadius = "3px"
        button3.style.padding = "0px"
        button1.style.backgroundColor = "black"
        button1.style.color = "white"
        button3.style.backgroundColor = "black"
        button3.style.color = "white"
}

var buttons = {"button1":true, "button2":true, "button3":true}
