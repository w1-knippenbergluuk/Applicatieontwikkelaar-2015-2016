function bepaalGroente()
{
	// Ophalen van de waarden (checked of niet)
	var spinazie = document.getElementById("spinazie").checked;
	var spruiten = document.getElementById("spruiten").checked;
	var witlof = document.getElementById("witlof").checked;
	var erwten = document.getElementById("erwten").checked;
	var tuinbonen = document.getElementById("tuinbonen").checked;

	// Uitkomst
	var uitkomst = "Je lust geen:";

	if(spinazie == true)
	{
		uitkomst = uitkomst + "<br>- Spinazie";
	}
	else if(spruiten == true)
	{
		uitkomst = uitkomst + "<br>- Spruiten";
	}
	else if(witlof == true)
	{
		uitkomst = uitkomst + "<br>- Witlof";
	}
	else if(erwten == true)
	{
		uitkomst = uitkomst + "<br>- Erwten";
	}
	else if(tuinbonen == true)
	{
		uitkomst = uitkomst + "<br>- Tuinbonen";
	}
	else
	{
		document.getElementById("resultaat").innerHTML = "Je hebt niets gekozen!";
	}
	document.getElementById("resultaat").innerHTML = uitkomst;
}