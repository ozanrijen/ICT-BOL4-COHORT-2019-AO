	const container = document.getElementById("container");
	var poging = 0;

	for (var rij = 0; rij < 5; rij++) {
        for (var kolom = 0; kolom < 5; kolom++) {
			var letters = document.createElement("input");
			container.appendChild(letters);
			letters.style.background = "white";
			letters.style.verticalAlign = top;
			letters.style.display = "inline-block";
			letters.style.height = '1.25em';
			letters.style.width = '1.25em';
			letters.style.textAlign = 'center';
			letters.style.fontSize = '3.5em';
			letters.style.fontFamily = 'Lato', 'Ariel';
			letters.id += "vakje" + rij + "-" + kolom;
        }
	}


	
	random = words[Math.floor(Math.random() * words.length)];		//Pakt een random woord uit de woordenlijst
	var wordArray = random.split('');		//Split de woorden in aparte letters
	console.log(random);

	var firstLetter = document.getElementById("vakje0-0").value = wordArray[0];
	document.getElementById("vakje0-0").style.backgroundColor = "green";
	console.log(firstLetter);
	


	function Check() {
		textArray = random.split('');
		antwoord = document.getElementById("antwoord");
		winAntwoord = antwoord.value.toString();
		antwoord = antwoord.value.split('');
		winRandom = random.toString();
		console.log(antwoord);
		if (antwoord.length == 5) {
			if (winAntwoord == winRandom) {
				alert("Je hebt gewonnen!");
				location.reload();
			}
			for (i = 0; i < 5; i++) {
				document.getElementById("vakje" + poging + "-" + i).value = antwoord[i];
			}
			for (i = 0; i < 5; i++) {
				if(antwoord[i] == textArray[i]) {
					document.getElementById("vakje" + poging + "-" + i).style.backgroundColor = "green";
					document.getElementById("vakje" + poging + "-" + i).style.borderRadius = "0%";
					antwoord[i] = "-"
					textArray[i] = "*"
				}
			}

			for (i = 0; i < 5; i++) {
				if (antwoord[i] != "-") {
					if (textArray.indexOf(antwoord[i])>0) {
						document.getElementById("vakje" + poging + "-" + i).style.backgroundColor = "yellow";
						document.getElementById("vakje" + poging + "-" + i).style.borderRadius = "50%";

						var positie = textArray.indexOf(antwoord[i]);
						antwoord[positie] = "/";
						textArray[i] = "*"
						console.log("hallo" + positie);
					} else if (antwoord[positie] = "/") {
						document.getElementById("vakje" + poging + "-" + i).style.backgroundColor = "red";
						document.getElementById("vakje" + poging + "-" + i).style.borderRadius = "0%";
					} else {
						document.getElementById("vakje" + poging + "-" + i).style.backgroundColor = "red";
						document.getElementById("vakje" + poging + "-" + i).style.borderRadius = "0%";
					}
				}
			}
			if (poging == 4) {
				alert("Je hebt verloren! Het antwoord is " + random);
				location.reload();
			}
			poging++
			console.log(textArray.indexOf(antwoord[i]));
		} else {
			alert("Je hebt een woord met 5 letters nodig.")
		}

	}
		

