//Maak hier opdracht 2D
//aanmaken variablen
var naam;
var letter;
var locatieOmzet

function zoekLetter()
{
    //waarde input ophalen
    naam = document.getElementById("invoerNaam").value;
    letter = document.getElementById("invoerLetter").value;
    
    // aanmaken div uitkomstDiv die nodig is om aan te geven als het er niet in zit
    var uitkomstDiv = '';

    //lus die iedere letter afgaat.
    for (var i = 0, a = naam.length; i < a; i++) {
        // if statement die kijkt of de ingevoerde letter overeen komt met de huidige letter
        if (naam[i] == letter){

            // omzetten van i naar werkelijke positie
            locatieOmzet = i + 1;

            // printen locatie.
            document.getElementById('uitkomstLetter').innerHTML = 'de letter ' + letter + ' staat op positie: ' + locatieOmzet + '.';

            // waarde van de resultaat div ophalen, als deze niet is aangepast door de loop dan zit de letter er niet in.
            uitkomstDiv = document.getElementById("uitkomstLetter").value;
        }   else    {
            // aangeven als de letter niet in de naam voor komt.
            if ( uitkomstDiv == ''){
                document.getElementById('uitkomstLetter').innerHTML = 'De letter ' + letter + ' komt niet in de naam voor.';
            }
        }
    }
}