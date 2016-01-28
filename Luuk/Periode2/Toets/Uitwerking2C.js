//Maak hier opdracht 2C
//aanmaken variablen
var naam

function lengteNaam()
{
    // waarde input ophalen
    naam = document.getElementById("naam").value;

    // de lengte van de naam ophalen
    var n = naam.length;

    // resultaat printen
    document.getElementById('uitkomstTekst').innerHTML = 'De naam "' + naam + '" heeft ' + n + ' tekens.';
}