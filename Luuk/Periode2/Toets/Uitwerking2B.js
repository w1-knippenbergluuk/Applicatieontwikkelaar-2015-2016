//Maak hier opdracht 2B
//Variablen aanmaken
var getal1;
var getal2;

var resultaat;

//functie
function aftrekken()
{
 //waarde input ophalen
    getal1 = document.getElementById("getalA").value;
    getal2 = document.getElementById("getalB").value;

    //validatie om die kijkt of er wel getallen zijn ingevuld
    if (isNaN(getal1) || isNaN(getal2)){
        document.getElementById('uitkomstErbij').innerHTML = 'Geen geldige waarde(n) ingevoerd!';
        return;
    }

    // de som
    resultaat = +getal1 - +getal2;
    // de som printen
    document.getElementById('uitkomstEraf').innerHTML = resultaat;
}