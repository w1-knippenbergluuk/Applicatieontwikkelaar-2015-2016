function myfunction()
{
    // twee prompts om de waarde in de variablen te krijgen en deze waardes bij elkaar optellen
    var getal1 = prompt('Typ het eerste getal');
    var getal2 = prompt('Typ het tweede getal');
    var resultaat = getal1 + getal2;

    // de waardes en uitkomst tonen
    document.write ('Uw eerste ingevoerde getal is: ' + getal1 + '<br />');
    document.write ('Uw tweede ingevoerde getal is: ' + getal2 + '<br />');
    document.write ('Dit is bij elkaar opgeteld: ' + resultaat);

}