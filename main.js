var start = false;

var count = 0;
var zahlenarray = new Array();

var speicherzahl;
var werteSpeicher = new Array();

var aktuellePosition = 0;
var klammerwerte = new Array();
var klammerspeicher = new Array();

var lastSum;

function buildNumber(inhalt){
	if(inhalt == 'C'){
		start = false;
		
		count = 0;
		zahlenarray.splice(0, zahlenarray.length);
		
		speicherzahl="";
		werteSpeicher.splice(0, werteSpeicher.length);
		
		aktuellePosition = 0;
		klammerwerte = new Array();
		klammerspeicher.splice(0, klammerspeicher.length);
		
		document.getElementById('betrag').innerHTML = "0";
	}
	else if(inhalt == '⌫'){
		if(zahlenarray[count-2] == ' ='){
			var werteSplitter = zahlenarray[count-1].toString();
			if(werteSplitter.length > 1){
				werteSplitter = werteSplitter.substr(0, werteSplitter.length-1);
				count = 0;
				zahlenarray.splice(0, zahlenarray.length);
			
				speicherzahl="";
				werteSpeicher.splice(0, werteSpeicher.length);
			
				aktuellePosition = 0;
				klammerwerte = new Array();
				klammerspeicher.splice(0, klammerspeicher.length);
				
				zahlenarray[count] = parseFloat(werteSplitter);
				document.getElementById('betrag').innerHTML = String(zahlenarray.join(""));
				count++;
			}
			else{
				count = 0;
				zahlenarray.splice(0, zahlenarray.length);
				
				speicherzahl="";
				werteSpeicher.splice(0, werteSpeicher.length);
				
				aktuellePosition = 0;
				klammerwerte = new Array();
				klammerspeicher.splice(0, klammerspeicher.length);
				
				document.getElementById('betrag').innerHTML = "0";
			}
		}
		else if(count == 1){
			var werteSplitter = zahlenarray[count-1].toString();
			if(werteSplitter.length > 1){
				werteSplitter = werteSplitter.substr(0, werteSplitter.length-1);
				
				speicherzahl="";
				werteSpeicher.splice(0, werteSpeicher.length);
			
				aktuellePosition = 0;
				klammerwerte = new Array();
				klammerspeicher.splice(0, klammerspeicher.length);
				
				zahlenarray[count-1] = parseFloat(werteSplitter);
				document.getElementById('betrag').innerHTML = String(zahlenarray.join(""));
			}
			else{
				count = 0;
				zahlenarray.splice(0, zahlenarray.length);
				
				speicherzahl="";
				werteSpeicher.splice(0, werteSpeicher.length);
				
				aktuellePosition = 0;
				klammerwerte = new Array();
				klammerspeicher.splice(0, klammerspeicher.length);
				
				document.getElementById('betrag').innerHTML = "0";
			}
		}
		else if(zahlenarray[count-2] != ' =' && count != 0) {
			zahlenarray.splice(count-1, 1);
			count --;
			document.getElementById('betrag').innerHTML = String(zahlenarray.join(""));
		}
	}
	else if(inhalt == '='){
		if(zahlenarray.includes(' =')){
			start = false;
		
			count = 0;
			zahlenarray.splice(0, zahlenarray.length);
		
			speicherzahl="";
			werteSpeicher.splice(0, werteSpeicher.length);
		
			aktuellePosition = 0;
			klammerwerte = new Array();
			klammerspeicher.splice(0, klammerspeicher.length);
		
			document.getElementById('betrag').innerHTML = "0";
		}
		else{
			zahlenarray[count] = " "+inhalt;
			count++;
			document.getElementById('betrag').innerHTML = String(zahlenarray.join(""));
			zahlenzusammensetzung(zahlenarray);
		}
	}
	else if(inhalt != 'C' || inhalt != '⌫' || inhalt != '='){
		if(zahlenarray[count-2] == ' ='){
			zahlenarray.splice(0, zahlenarray.length-1);
			document.getElementById('betrag').innerHTML = String(zahlenarray.join(""));
			start = false;
			count = 1;
			zahlenarray[count] = inhalt;
			document.getElementById('betrag').innerHTML = String(zahlenarray.join(""));
			 
			speicherzahl = zahlenarray[0].toString();
			
			if(speicherzahl.length > 1){
				start = true;
			}
			else if (speicherzahl.length == 1){
				start = false;
			}
			
			werteSpeicher.splice(0, werteSpeicher.length);
			aktuellePosition = 0;
			klammerwerte = new Array();
			klammerspeicher.splice(0, klammerspeicher.length);
			
			count++;
		}
		else{
			zahlenarray[count] = inhalt;
			document.getElementById('betrag').innerHTML = String(zahlenarray.join(""));
			count++;
		}
	}
}

function zahlenzusammensetzung(array){
	for(var i = 0; i < array.length; i++){
		switch(array[i]){
			case 0:
				if(start == false){
					speicherzahl = '0';
					start = true;
				}
				else{
					speicherzahl = speicherzahl.concat('0');
				}
				break;
			case 1:
				if(start == false){
					speicherzahl = '1';
					start = true;
				}
				else{
					speicherzahl = speicherzahl.concat('1');
				}
				break;
			case 2:
				if(start == false){
					speicherzahl = '2';
					start = true;
				}
				else{
					speicherzahl = speicherzahl.concat('2');
				}
				break;
			case 3:
				if(start == false){
					speicherzahl = '3';
					start = true;
				}
				else{
					speicherzahl = speicherzahl.concat('3');
				}
				break;
			case 4:
				if(start == false){
					speicherzahl = '4';
					start = true;
				}
				else{
					speicherzahl = speicherzahl.concat('4');
				}
				break;
			case 5:
				if(start == false){
					speicherzahl = '5';
					start = true;
				}
				else{
					speicherzahl = speicherzahl.concat('5');
				}
				break;
			case 6:
				if(start == false){
					speicherzahl = '6';
					start = true;
				}
				else{
					speicherzahl = speicherzahl.concat('6');
				}
				break;
			case 7:
				if(start == false){
					speicherzahl = '7';
					start = true;
				}
				else{
					speicherzahl = speicherzahl.concat('7');
				}
				break;
			case 8:
				if(start == false){
					speicherzahl = '8';
					start = true;
				}
				else{
					speicherzahl = speicherzahl.concat('8');
				}
				break;
			case 9:
				if(start == false){
					speicherzahl = '9';
					start = true;
				}
				else{
					speicherzahl = speicherzahl.concat('9');
				}
				break;
				
			case 'π':
				speicherzahl = String(parseFloat(Math.PI));
				break;
			case 'e':
				speicherzahl = String(parseFloat(Math.exp(1)));
				break;
				
			case '.':
				speicherzahl = speicherzahl.concat('.');
				break;
				
			case '+':
				if(array[(i-1)] == '²' || array[(i-1)] == '!' || array[(i-1)] == '√x' || array[(i-1)] == 'log'){																 
					werteSpeicher.push('+');
					start = false;
					break;
				}
				else{
					werteSpeicher.push(parseFloat(speicherzahl));
					werteSpeicher.push('+');
					start = false;
					break;
				}
			case '-':
				if(array[(i-1)] == '²' || array[(i-1)] == '!' || array[(i-1)] == '√x' || array[(i-1)] == 'log'){
					werteSpeicher.push('-');
					start = false;
					break;
				}
				else{
					werteSpeicher.push(parseFloat(speicherzahl));
					werteSpeicher.push('-');
					start = false;
					break;
				}
			case '×':
				if(array[(i-1)] == '²' || array[(i-1)] == '!' || array[(i-1)] == '√x' || array[(i-1)] == 'log'){
					werteSpeicher.push('×');
					start = false;
					break;
				}
				else{
					werteSpeicher.push(parseFloat(speicherzahl));
					werteSpeicher.push('×');
					start = false;
					break;
				}
			case '÷':
				if(array[(i-1)] == '²' || array[(i-1)] == '!' || array[(i-1)] == '√x' || array[(i-1)] == 'log'){
					werteSpeicher.push('÷');
					start = false;
					break;
				}
				else{
					werteSpeicher.push(parseFloat(speicherzahl));
					werteSpeicher.push('÷');
					start = false;
					break;
				}
			
			case '(':
				aktuellePosition = i;
				speicherzahl = klammerRechnung(array);
				i = aktuellePosition;
				break;
				
			case 'log':
				werteSpeicher.push(parseFloat(Math.log10(parseFloat(speicherzahl))));
				break;
			case '!':
				werteSpeicher.push(parseFloat(faculty(parseFloat(speicherzahl))));
				break;
			case '²':
				werteSpeicher.push(parseFloat(Math.pow(parseFloat(speicherzahl),2)));
				break;
			case '√x':
				werteSpeicher.push(parseFloat(Math.sqrt(parseFloat(speicherzahl))));
				break;
				
			case ' =':
				if(array[(i-1)] == '²' || array[(i-1)] == '!' || array[(i-1)] == '√x' || array[(i-1)] == 'log'){
					lastSum = gesamtsumme(werteSpeicher);
					document.getElementById('betrag').innerHTML = String(zahlenarray.join(""))+" "+lastSum;
					zahlenarray[count] = lastSum;
					count++;
					break;
				}
				else{
					werteSpeicher.push(parseFloat(speicherzahl));	
					lastSum = gesamtsumme(werteSpeicher);
					document.getElementById('betrag').innerHTML = String(zahlenarray.join(""))+" "+lastSum;
					zahlenarray[count] = lastSum;
					count++;
					break;
				}
			default:
				speicherzahl = array[i];
				break;
		}
	}
}

function faculty(nummer) {
	if (nummer < 0) 
		return -1;
	else if (nummer == 0) 
		return 1;
	else {
		return (nummer * faculty(nummer - 1));
	}
}

function klammerRechnung(altesArray){
	for(aktuellePosition+1; aktuellePosition < altesArray.length-1; aktuellePosition++){
		switch(altesArray[aktuellePosition]){
			case 0:
				if(start == false){
					klammerwerte = '0';
					start = true;
				}
				else{
					klammerwerte = klammerwerte.concat('0');
				}
				break;
			case 1:
				if(start == false){
					klammerwerte = '1';
					start = true;
				}
				else{
					klammerwerte = klammerwerte.concat('1');
				}
				break;
			case 2:
				if(start == false){
					klammerwerte = '2';
					start = true;
				}
				else{
					klammerwerte = klammerwerte.concat('2');
				}
				break;
			case 3:
				if(start == false){
					klammerwerte = '3';
					start = true;
				}
				else{
					klammerwerte = klammerwerte.concat('3');
				}
				break;
			case 4:
				if(start == false){
					klammerwerte = '4';
					start = true;
				}
				else{
					klammerwerte = klammerwerte.concat('4');
				}
				break;
			case 5:
				if(start == false){
					klammerwerte = '5';
					start = true;
				}
				else{
					klammerwerte = klammerwerte.concat('5');
				}
				break;
			case 6:
				if(start == false){
					klammerwerte = '6';
					start = true;
				}
				else{
					klammerwerte = klammerwerte.concat('6');
				}
				break;
			case 7:
				if(start == false){
					klammerwerte = '7';
					start = true;
				}
				else{
					klammerwerte = klammerwerte.concat('7');
				}
				break;
			case 8:
				if(start == false){
					klammerwerte = '8';
					start = true;
				}
				else{
					klammerwerte = klammerwerte.concat('8');
				}
				break;
			case 9:
				if(start == false){
					klammerwerte = '9';
					start = true;
				}
				else{
					klammerwerte = klammerwerte.concat('9');
				}
				break;
				
			case 'π':
				klammerwerte = String(parseFloat(Math.PI));
				break;
			case 'e':
				klammerwerte = String(parseFloat(Math.exp(1)));
				break;
				
			case '.':
				klammerwerte = klammerwerte.concat('.');
				break;
				
			case '+':
				klammerspeicher.push(parseFloat(klammerwerte));
				klammerspeicher.push('+');
				start = false;
				break;
			case '-':
				klammerspeicher.push(parseFloat(klammerwerte));
				klammerspeicher.push('-');
				start = false;
				break;
			case '×':
				klammerspeicher.push(parseFloat(klammerwerte));
				klammerspeicher.push('×');
				start = false;
				break;
			case '÷':
				klammerspeicher.push(parseFloat(klammerwerte));
				klammerspeicher.push('÷');
				start = false;
				break;
				
			case ')':
				klammerspeicher.push(parseFloat(klammerwerte));
				return gesamtsumme(klammerspeicher);
				break;
				
			case 'log':
				klammerspeicher.push(parseFloat(Math.log(parseFloat(klammerwerte))));
				break;
			case '!':
				klammerspeicher.push(parseFloat(faculty(parseFloat(klammerwerte))));
				break;
			case '²':
				klammerspeicher.push(parseFloat(Math.pow(parseFloat(klammerwerte),2)));
				break;
			case '√x':
				klammerspeicher.push(parseFloat(Math.sqrt(parseFloat(klammerwerte))));
				break;
		}
	}
}

function gesamtsumme(werteArray){
	for(var i = 0; i < werteArray.length-1; i++){
		if(werteArray[i] == '×') {
			werteArray[i] = werteArray[i-1] * werteArray[i+1];
			werteArray.splice(i-1, 1);
			werteArray.splice(i, 1);
			j = j-1;
		}
		if(werteArray[i] == '÷'){
			werteArray[i] = werteArray[i-1] / werteArray[i+1];
			werteArray.splice(i-1, 1);
			werteArray.splice(i, 1);
			j = j-1;
		}
	}
	for(var j = 0; j < werteArray.length-1; j++){
		if(werteArray[j] == '+'){
			werteArray[j] = werteArray[j-1] + werteArray[j+1];
			werteArray.splice(j-1, 1);
			werteArray.splice(j, 1);
			j = j-1;
		}
		if(werteArray[j] == '-'){
			werteArray[j] = werteArray[j-1] - werteArray[j+1];
			werteArray.splice(j-1, 1);
			werteArray.splice(j, 1);
			j = j-1;
		}
	}
	return werteArray[0];
}