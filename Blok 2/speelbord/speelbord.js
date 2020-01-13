function lingo() {
    var textbox = document.getElementById("guess");
    var text = textbox.value;
    var textArray = text.split('');
    document.getElementById("letter1").innerText = textArray[0];
    document.getElementById("letter2").innerText = textArray[1];
    document.getElementById("letter3").innerText = textArray[2];
    document.getElementById("letter4").innerText = textArray[3];
    document.getElementById("letter5").innerText = textArray[4];
    var input = document.getElementById("input").value;


    for (i = 0; i < textArray.lenght; i++) {
        if (textArray[i] == input) {
            var kop = document.createElement('h1');
            kop.innerText = i;
            document.body.appendChild(kop);
        }
    }
    
}

function check() {
    
}