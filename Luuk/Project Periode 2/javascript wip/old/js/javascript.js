function verkleinFontSize()	{
	document.getElementsByTagName("body")[0].style.fontSize = '10px';
	document.getElementById("helepagina").style.height="2500px";
	document.getElementById("lettergroottes").style.top="2480px";
}

function normaalFontSize()	{
	document.getElementsByTagName("body")[0].style.fontSize = '12px';
	document.getElementById("helepagina").style.height="3000px";
	document.getElementById("lettergroottes").style.top="2980px";
}

function vergrootFontSize()	{
	document.getElementsByTagName("body")[0].style.fontSize = '14px';
	document.getElementById("helepagina").style.height="3500px";
	document.getElementById("lettergroottes").style.top="3480px";
}

function verzendInfo() {
//aanmaken variablen
	var getalElement = document.getElementById('voornaam');
	var $voornaam = getalElement.value;
	  
	var getalElement = document.getElementById('achternaam');
	var $achternaam = getalElement.value;
	  
	var getalElement = document.getElementById('geboortedatum');
	var $geboortedatum = getalElement.value;
	  
	var getalElement = document.getElementById('email');
	var $email = getalElement.value;
	  
	var getalElement = document.getElementById('straat');
	var $straat = getalElement.value;
	  
	var getalElement = document.getElementById('postcode');
	var $postcode = getalElement.value;
	  
	var getalElement = document.getElementById('woonplaats');
	var $woonplaats = getalElement.value;
	  
	var getalElement = document.getElementById('provincie');
	var $provincie = getalElement.value;
	
	var getalElement = document.getElementById('iban');
	var $iban = getalElement.value;

  // controleren of invoervelden zijn ingevuld
     if ($voornaam == null || $voornaam == "" || $achternaam == null || $achternaam == "" || $geboortedatum == null || $geboortedatum == "" || $email == null || $email == "" ||
		 $straat == null || $straat == "" || $postcode == null || $postcode == "" || $woonplaats == null || $woonplaats == "" || $provincie == null || $provincie == "" ) {
        alert("U bent een van de invoervelden met een sterretje vergeten in te vullen!");
        return false;
     }	else{
	 var res = document.getElementById('resultaat');
	 res.innerHTML = 'Uw order is geplaatst met de informatie die u in heeft gevuld.' + '<br />' + 'Voornaam:' +$voornaam + '<br />' + 'Achternaam:' + $achternaam +'<br />' + 'Geboortedatum:' + $geboortedatum + '<br />' + 'E-mail:'  + $email
	  + '<br />' + 'Straat:' +$straat + '<br />' + 'Postcode:' + $postcode +'<br />' + 'Woonplaats:' + $woonplaats + '<br />' + 'Provincie:'  + $provincie + '<br />' + 'Iban:'  + $iban;
	 }
  
  
 // var totaal = (getal1 * getal2);
  
	var res = document.getElementById('resultaat');
 
//	res.innerHTML = $voornaam + $achternaam + $geboortedatum + $email;

}

function berekenWaarde()	{
	
// aanmaken variablen meelproducten
	var getalElement = document.getElementById('meel1');
	var $meelGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('meel2');
	var $meelGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('meel3');
	var $meelGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('meel4');
	var $meelGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('meel5');
	var $meelGetal5 = getalElement.value;
	
// aanmaken variablen gistproducten
	var getalElement = document.getElementById('gist1');
	var $gistGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('gist2');
	var $gistGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('gist3');
	var $gistGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('gist4');
	var $gistGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('gist5');
	var $gistGetal5 = getalElement.value;
	
	
	
// aanmaken variablen zoetwaren
	var getalElement = document.getElementById('zoet1');
	var $zoetGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('zoet2');
	var $zoetGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('zoet3');
	var $zoetGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('zoet4');
	var $zoetGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('zoet5');
	var $zoetGetal5 = getalElement.value;
	
// aanmaken variablen bakmiddelen
	var getalElement = document.getElementById('bak1');
	var $bakGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('bak2');
	var $bakGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('bak3');
	var $bakGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('bak4');
	var $bakGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('bak5');
	var $bakGetal5 = getalElement.value;
	
	var getalElement = document.getElementById('bak6');
	var $bakGetal6 = getalElement.value;
	
	var getalElement = document.getElementById('bak7');
	var $bakGetal7 = getalElement.value;
	
	var getalElement = document.getElementById('bak8');
	var $bakGetal8 = getalElement.value;
	
	var getalElement = document.getElementById('bak9');
	var $bakGetal9 = getalElement.value;
	
	var getalElement = document.getElementById('bak10');
	var $bakGetal10 = getalElement.value;
	
	var getalElement = document.getElementById('bak11');
	var $bakGetal11 = getalElement.value;
	
	var getalElement = document.getElementById('bak12');
	var $bakGetal12 = getalElement.value;
	
// aanmaken variablen Springvormen
	var getalElement = document.getElementById('spring1');
	var $springGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('spring2');
	var $springGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('spring3');
	var $springGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('spring4');
	var $springGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('spring5');
	var $springGetal5 = getalElement.value;
	
	var getalElement = document.getElementById('spring6');
	var $springGetal6 = getalElement.value;
	
	var getalElement = document.getElementById('spring7');
	var $springGetal7 = getalElement.value;
	
	var getalElement = document.getElementById('spring8');
	var $springGetal8 = getalElement.value;
	
	// aanmaken variablen Verpakkingsmiddelen
	var getalElement = document.getElementById('verpak1');
	var $verpakGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('verpak2');
	var $verpakGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('verpak3');
	var $verpakGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('verpak4');
	var $verpakGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('verpak5');
	var $verpakGetal5 = getalElement.value;
	
	var getalElement = document.getElementById('verpak6');
	var $verpakGetal6 = getalElement.value;
	
	var getalElement = document.getElementById('verpak7');
	var $verpakGetal7 = getalElement.value;
	
	var getalElement = document.getElementById('verpak8');
	var $verpakGetal8 = getalElement.value;
	
	var getalElement = document.getElementById('verpak9');
	var $verpakGetal9 = getalElement.value;
	
	var getalElement = document.getElementById('verpak10');
	var $verpakGetal10 = getalElement.value;
	
	var getalElement = document.getElementById('verpak11');
	var $verpakGetal11 = getalElement.value;
	
	var getalElement = document.getElementById('verpak12');
	var $verpakGetal12 = getalElement.value;
	
	var getalElement = document.getElementById('verpak13');
	var $verpakGetal13 = getalElement.value;
	
	var getalElement = document.getElementById('verpak14');
	var $verpakGetal14 = getalElement.value;
	
	var getalElement = document.getElementById('verpak15');
	var $verpakGetal15 = getalElement.value;
	
	var getalElement = document.getElementById('verpak16');
	var $verpakGetal16 = getalElement.value;
	
	var getalElement = document.getElementById('verpak17');
	var $verpakGetal17 = getalElement.value;
	
	var getalElement = document.getElementById('verpak18');
	var $verpakGetal18 = getalElement.value;
	
	var getalElement = document.getElementById('verpak19');
	var $verpakGetal19 = getalElement.value;
	
	var getalElement = document.getElementById('verpak20');
	var $verpakGetal20 = getalElement.value;
	
	var getalElement = document.getElementById('verpak21');
	var $verpakGetal21 = getalElement.value;
	
	// controle of dat er iets is ingevoerd
	if ($meelGetal1 + $meelGetal2 + $meelGetal3 + $meelGetal4 + $meelGetal5 + $gistGetal1 + $gistGetal2 + $gistGetal3 + $gistGetal4 + $gistGetal5 + $zoetGetal1  + $zoetGetal2  + $zoetGetal3 + $zoetGetal4  + $zoetGetal5
		+ $bakGetal1 + $bakGetal2 + $bakGetal3 + $bakGetal4 + $bakGetal5 + $bakGetal6 + $bakGetal7 + $bakGetal8 + $bakGetal9 + $bakGetal10 + $bakGetal11 + $bakGetal12 + $springGetal1 + $springGetal2 + $springGetal3 + $springGetal4 
		+ $springGetal5 + $springGetal6 + $springGetal7 + $springGetal8 + $verpakGetal1 + $verpakGetal2 + $verpakGetal3 + $verpakGetal4 + $verpakGetal5 + $verpakGetal6 + $verpakGetal7 + $verpakGetal8
		+ $verpakGetal9 + $verpakGetal10 + $verpakGetal11 + $verpakGetal12 + $verpakGetal13 + $verpakGetal14 + $verpakGetal15 + $verpakGetal16 + $verpakGetal17 + $verpakGetal18 + $verpakGetal19 + $verpakGetal20 + $verpakGetal21 == "") {
        alert("U moet iets invullen");
        return false;
     }
	
	// controleren of er geen letters zijn ingevuld. popup en script afbreken als het wel zo is.
if (isNaN($meelGetal1 || $meelGetal2 || $meelGetal3 || $meelGetal4 || $meelGetal5 || $gistGetal1 || $gistGetal2 || $gistGetal3 || $gistGetal4 || $gistGetal5 || $zoetGetal1 || $zoetGetal2 || $zoetGetal3 || $zoetGetal4 || $zoetGetal5 
			|| $bakGetal1 || $bakGetal2 || $bakGetal3 || $bakGetal4 || $bakGetal5 || $bakGetal6 || $bakGetal7 || $bakGetal8 || $bakGetal9 || $bakGetal10 || $bakGetal11 || $bakGetal12 || $springGetal1 || $springGetal2 
			|| $springGetal3 || $springGetal4 || $springGetal5 || $springGetal6 || $springGetal7 || $springGetal8 || $verpakGetal1 || $verpakGetal2 || $verpakGetal3 || $verpakGetal4 || $verpakGetal5 || $verpakGetal6 || $verpakGetal7
			|| $verpakGetal8 || $verpakGetal9 || $verpakGetal10 || $verpakGetal11 || $verpakGetal12 || $verpakGetal13 || $verpakGetal14 || $verpakGetal15 || $verpakGetal16 || $verpakGetal17 || $verpakGetal18 || $verpakGetal19
			|| $verpakGetal20 || $verpakGetal21 )) {
	alert("Je moet getallen invullen");
	return false;
}

	// meel exclusief btw berekenen
	var $meelEx1 = $meelGetal1 * 5;
	var $meelEx2 = $meelGetal2 * 10;
	var $meelEx3 = $meelGetal3 * 15;
	var $meelEx4 = $meelGetal4 * 20;
	var $meelEx5 = $meelGetal5 * 25;
	
	// meel inclusief btw berekenen
	var $meelIn1 = $meelEx1 * 1.06;
	var $meelIn2 = $meelEx2 * 1.06;
	var $meelIn3 = $meelEx3 * 1.06;
	var $meelIn4 = $meelEx4 * 1.06;
	var $meelIn5 = $meelEx5 * 1.06;
	
	//  innerHTML variablen locaties aanmaken (meel)
	var $meelRes1 = document.getElementById('meelResultaat1');
	var $meelRes2 = document.getElementById('meelResultaat2');
	var $meelRes3 = document.getElementById('meelResultaat3');
	var $meelRes4 = document.getElementById('meelResultaat4');
	var $meelRes5 = document.getElementById('meelResultaat5');
	
	// gist exclusief btw berekenen
	var $gistEx1 = $gistGetal1 * 5;
	var $gistEx2 = $gistGetal2 * 10;
	var $gistEx3 = $gistGetal3 * 15;
	var $gistEx4 = $gistGetal4 * 20;
	var $gistEx5 = $gistGetal5 * 25;
	
	// gist inclusief btw berekenen
	var $gistIn1 = $gistEx1 * 1.06;
	var $gistIn2 = $gistEx2 * 1.06;
	var $gistIn3 = $gistEx3 * 1.06;
	var $gistIn4 = $gistEx4 * 1.06;
	var $gistIn5 = $gistEx5 * 1.06;
	
	// innerHTML variablen locaties aanmaken (gist)
	var $gistRes1 = document.getElementById('gistResultaat1');
	var $gistRes2 = document.getElementById('gistResultaat2');
	var $gistRes3 = document.getElementById('gistResultaat3');
	var $gistRes4 = document.getElementById('gistResultaat4');
	var $gistRes5 = document.getElementById('gistResultaat5');
	
	// zoetwaren exclusief btw berekenen
	var $zoetEx1 = $zoetGetal1 * 5;
	var $zoetEx2 = $zoetGetal2 * 10;
	var $zoetEx3 = $zoetGetal3 * 15;
	var $zoetEx4 = $zoetGetal4 * 20;
	var $zoetEx5 = $zoetGetal5 * 25;
	
	// zoetwaren inclusief btw berekenen
	var $zoetIn1 = $zoetEx1 * 1.06;
	var $zoetIn2 = $zoetEx2 * 1.06;
	var $zoetIn3 = $zoetEx3 * 1.06;
	var $zoetIn4 = $zoetEx4 * 1.06;
	var $zoetIn5 = $zoetEx5 * 1.06;
	
	//  innerHTML variablen locaties aanmaken (zoetwaren)
	var $zoetRes1 = document.getElementById('zoetResultaat1');
	var $zoetRes2 = document.getElementById('zoetResultaat2');
	var $zoetRes3 = document.getElementById('zoetResultaat3');
	var $zoetRes4 = document.getElementById('zoetResultaat4');
	var $zoetRes5 = document.getElementById('zoetResultaat5');
	
	// bakmiddelen exclusief btw berekenen
	var $bakEx1 = $bakGetal1 * 5;
	var $bakEx2 = $bakGetal2 * 10;
	var $bakEx3 = $bakGetal3 * 15;
	var $bakEx4 = $bakGetal4 * 20;
	var $bakEx5 = $bakGetal5 * 25;
	var $bakEx6 = $bakGetal6 * 30;
	var $bakEx7 = $bakGetal7 * 35;
	var $bakEx8 = $bakGetal8 * 40;
	var $bakEx9 = $bakGetal9 * 45;
	var $bakEx10 = $bakGetal10 * 50;
	var $bakEx11 = $bakGetal11 * 55;
	var $bakEx12 = $bakGetal12 * 60;
	
	// bakproducten inclusief btw bakmiddelen
	var $bakIn1 = $bakEx1 * 1.21;
	var $bakIn2 = $bakEx2 * 1.21;
	var $bakIn3 = $bakEx3 * 1.21;
	var $bakIn4 = $bakEx4 * 1.21;
	var $bakIn5 = $bakEx5 * 1.21;
	var $bakIn6 = $bakEx6 * 1.21;
	var $bakIn7 = $bakEx7 * 1.21;
	var $bakIn8 = $bakEx8 * 1.21;
	var $bakIn9 = $bakEx9 * 1.21;
	var $bakIn10 = $bakEx10 * 1.21;
	var $bakIn11 = $bakEx11* 1.21;
	var $bakIn12 = $bakEx12 * 1.21;
	
	//  innerHTML variablen locaties aanmaken (bakmiddelen)
	var $bakRes1 = document.getElementById('bakResultaat1');
	var $bakRes2 = document.getElementById('bakResultaat2');
	var $bakRes3 = document.getElementById('bakResultaat3');
	var $bakRes4 = document.getElementById('bakResultaat4');
	var $bakRes5 = document.getElementById('bakResultaat5');
	var $bakRes6 = document.getElementById('bakResultaat6');
	var $bakRes7 = document.getElementById('bakResultaat7');
	var $bakRes8 = document.getElementById('bakResultaat8');
	var $bakRes9 = document.getElementById('bakResultaat9');
	var $bakRes10 = document.getElementById('bakResultaat10');
	var $bakRes11 = document.getElementById('bakResultaat11');
	var $bakRes12 = document.getElementById('bakResultaat12');
	
		// springvormen exclusief btw berekenen
	var $springEx1 = $springGetal1 * 5;
	var $springEx2 = $springGetal2 * 10;
	var $springEx3 = $springGetal3 * 15;
	var $springEx4 = $springGetal4 * 20;
	var $springEx5 = $springGetal5 * 25;
	var $springEx6 = $springGetal6 * 30;
	var $springEx7 = $springGetal7 * 35;
	var $springEx8 = $springGetal8 * 40;
	
	// springvormen inclusief btw berekenen
	var $springIn1 = $springEx1 * 1.21;
	var $springIn2 = $springEx2 * 1.21;
	var $springIn3 = $springEx3 * 1.21;
	var $springIn4 = $springEx4 * 1.21;
	var $springIn5 = $springEx5 * 1.21;
	var $springIn6 = $springEx6 * 1.21;
	var $springIn7 = $springEx7 * 1.21;
	var $springIn8 = $springEx8 * 1.21;
	
		// verpakkingsmiddelen exclusief btw berekenen
	var $verpakEx1 = $verpakGetal1 * 5;
	var $verpakEx2 = $verpakGetal2 * 10;
	var $verpakEx3 = $verpakGetal3 * 15;
	var $verpakEx4 = $verpakGetal4 * 20;
	var $verpakEx5 = $verpakGetal5 * 25;
	var $verpakEx6 = $verpakGetal6 * 30;
	var $verpakEx7 = $verpakGetal7 * 35;
	var $verpakEx8 = $verpakGetal8 * 40;
	var $verpakEx9 = $verpakGetal9 * 45;
	var $verpakEx10 = $verpakGetal10 * 50;
	var $verpakEx11 = $verpakGetal11 * 55;
	var $verpakEx12 = $verpakGetal12 * 60;
	var $verpakEx13 = $verpakGetal13 * 65;
	var $verpakEx14 = $verpakGetal14 * 70;
	var $verpakEx15 = $verpakGetal15 * 75;
	var $verpakEx16 = $verpakGetal16 * 80;
	var $verpakEx17 = $verpakGetal17 * 85;
	var $verpakEx18 = $verpakGetal18 * 90;
	var $verpakEx19 = $verpakGetal19 * 95;
	var $verpakEx20 = $verpakGetal20 * 100;
	var $verpakEx21 = $verpakGetal21 * 105;
	
	// verpakkingsmiddelen inclusief btw berekenen
	var $verpakIn1 = $verpakEx1 * 1.21;
	var $verpakIn2 = $verpakEx2 * 1.21;
	var $verpakIn3 = $verpakEx3 * 1.21;
	var $verpakIn4 = $verpakEx4 * 1.21;
	var $verpakIn5 = $verpakEx5 * 1.21;
	var $verpakIn6 = $verpakEx6 * 1.21;
	var $verpakIn7 = $verpakEx7 * 1.21;
	var $verpakIn8 = $verpakEx8 * 1.21;
	var $verpakIn9 = $verpakEx9 * 1.21;
	var $verpakIn10 = $verpakEx10 * 1.21;
	var $verpakIn11 = $verpakEx11 * 1.21;
	var $verpakIn12 = $verpakEx12 * 1.21;
	var $verpakIn13 = $verpakEx13 * 1.21;
	var $verpakIn14 = $verpakEx14 * 1.21;
	var $verpakIn15 = $verpakEx15 * 1.21;
	var $verpakIn16 = $verpakEx16 * 1.21;
	var $verpakIn17 = $verpakEx17 * 1.21;
	var $verpakIn18 = $verpakEx18 * 1.21;
	var $verpakIn19 = $verpakEx19 * 1.21;
	var $verpakIn20 = $verpakEx20 * 1.21;
	var $verpakIn21 = $verpakEx21 * 1.21;
	
	// Totaalkosten exclusief BTW 
	var $totaalEx = $meelEx1 + $meelEx2 + $meelEx3 + $meelEx4 + $meelEx5 + $gistEx1 + $gistEx2 + $gistEx3 + $gistEx4 + $gistEx5 + $zoetEx1 + $zoetEx2+ $zoetEx3 + $zoetEx4 + $zoetEx5 + 
		$bakEx1 + $bakEx2 + $bakEx3 + $bakEx4 + $bakEx5 + $bakEx6 + $bakEx7 + $bakEx8 + $bakEx9 + $bakEx10 + $bakEx11 + $bakEx12 + $springEx1 + $springEx2 + $springEx3 + $springEx4 +
		$springEx5 + $springEx6 + $springEx7 + $springEx8 + $verpakEx1 + $verpakEx2 + $verpakEx3 + $verpakEx4 + $verpakEx5 + $verpakEx6 + $verpakEx7 + $verpakEx8 + $verpakEx9 + $verpakEx10 +
		$verpakEx11 + $verpakEx12 + $verpakEx13 + $verpakEx14 + $verpakEx15 + $verpakEx16 + $verpakEx17 + $verpakEx18 + $verpakEx19 + $verpakEx20 + $verpakEx21;
			
	// Totaalkosten inclusief BTW
	var $totaalIn = $meelIn1 + $meelIn2 + $meelIn3 + $meelIn4 + $meelIn5 + $gistIn1 + $gistIn2 + $gistIn3 + $gistIn4 + $gistIn5 + $zoetIn1 + $zoetIn2 + $zoetIn3 + $zoetIn4 + $zoetIn5 
		 + $bakIn1 + $bakIn2 + $bakIn3 + $bakIn4 + $bakIn5 + $bakIn6 + $bakIn7 + $bakIn8 + $bakIn9 + $bakIn10 + $bakIn11 + $bakIn12 + $springIn1 + $springIn2 + $springIn3 + $springIn4 +
		 $springIn5 + $springIn6 + $springIn7 + $springIn8 + $verpakIn1 + $verpakIn2 + $verpakIn3 + $verpakIn4 + $verpakIn5 + $verpakIn6 + $verpakIn7 + $verpakIn8 + $verpakIn9 + $verpakIn10
		 + $verpakIn11 + $verpakIn12 + $verpakIn13 + $verpakIn14 + $verpakIn15 + $verpakIn16 + $verpakIn17 + $verpakIn18 + $verpakIn19 + $verpakIn20  + $verpakIn21;
				
	var $totEx = document.getElementById('totaalEx');

	var $subtotEx = document.getElementById('subtotaalEx');
	
	if ($totaalEx == null || $totaalEx == "") {
}	else{
	$subtotEx.innerHTML = 'Subtotaal (ex. BTW) &euro;' + $totaalEx;
}

	var $subtotIn = document.getElementById('subtotaalIn');
	
	if ($totaalIn == null || $totaalIn == "") {
}	else{
	$subtotIn.innerHTML = 'Subtotaal (in. BTW) &euro;' + $totaalIn;
}	

}

function closeButton()	{
	document.getElementById('popupResultaat').style.visibility = 'hidden';
	document.getElementById('content').style.background = '';
	document.getElementById('helepagina').style.opacity = '1';
	document.getElementsByTagName("body")[0].style.overflow = 'scroll';
}

function ProductenWaarde()	{
	
	
	
	// aanmaken variablen meelproducten
	var getalElement = document.getElementById('meel1');
	var $meelGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('meel2');
	var $meelGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('meel3');
	var $meelGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('meel4');
	var $meelGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('meel5');
	var $meelGetal5 = getalElement.value;
	
// aanmaken variablen gistproducten
	var getalElement = document.getElementById('gist1');
	var $gistGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('gist2');
	var $gistGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('gist3');
	var $gistGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('gist4');
	var $gistGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('gist5');
	var $gistGetal5 = getalElement.value;
	
// aanmaken variablen zoetwaren
	var getalElement = document.getElementById('zoet1');
	var $zoetGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('zoet2');
	var $zoetGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('zoet3');
	var $zoetGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('zoet4');
	var $zoetGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('zoet5');
	var $zoetGetal5 = getalElement.value;
	
// aanmaken variablen bakmiddelen
	var getalElement = document.getElementById('bak1');
	var $bakGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('bak2');
	var $bakGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('bak3');
	var $bakGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('bak4');
	var $bakGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('bak5');
	var $bakGetal5 = getalElement.value;
	
	var getalElement = document.getElementById('bak6');
	var $bakGetal6 = getalElement.value;
	
	var getalElement = document.getElementById('bak7');
	var $bakGetal7 = getalElement.value;
	
	var getalElement = document.getElementById('bak8');
	var $bakGetal8 = getalElement.value;
	
	var getalElement = document.getElementById('bak9');
	var $bakGetal9 = getalElement.value;
	
	var getalElement = document.getElementById('bak10');
	var $bakGetal10 = getalElement.value;
	
	var getalElement = document.getElementById('bak11');
	var $bakGetal11 = getalElement.value;
	
	var getalElement = document.getElementById('bak12');
	var $bakGetal12 = getalElement.value;
	
// aanmaken variablen Springvormen
	var getalElement = document.getElementById('spring1');
	var $springGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('spring2');
	var $springGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('spring3');
	var $springGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('spring4');
	var $springGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('spring5');
	var $springGetal5 = getalElement.value;
	
	var getalElement = document.getElementById('spring6');
	var $springGetal6 = getalElement.value;
	
	var getalElement = document.getElementById('spring7');
	var $springGetal7 = getalElement.value;
	
	var getalElement = document.getElementById('spring8');
	var $springGetal8 = getalElement.value;
	
	// meel exclusief btw berekenen
	var $meelEx1 = $meelGetal1 * 5;
	var $meelEx2 = $meelGetal2 * 10;
	var $meelEx3 = $meelGetal3 * 15;
	var $meelEx4 = $meelGetal4 * 20;
	var $meelEx5 = $meelGetal5 * 25;
	
	// meel inclusief btw berekenen
	var $meelIn1 = $meelEx1 * 1.06;
	var $meelIn2 = $meelEx2 * 1.06;
	var $meelIn3 = $meelEx3 * 1.06;
	var $meelIn4 = $meelEx4 * 1.06;
	var $meelIn5 = $meelEx5 * 1.06;
	
	//  innerHTML variablen locaties aanmaken (meel)
	var $meelRes1 = document.getElementById('meelResultaat1');
	var $meelRes2 = document.getElementById('meelResultaat2');
	var $meelRes3 = document.getElementById('meelResultaat3');
	var $meelRes4 = document.getElementById('meelResultaat4');
	var $meelRes5 = document.getElementById('meelResultaat5');
	
	// gist exclusief btw berekenen
	var $gistEx1 = $gistGetal1 * 5;
	var $gistEx2 = $gistGetal2 * 10;
	var $gistEx3 = $gistGetal3 * 15;
	var $gistEx4 = $gistGetal4 * 20;
	var $gistEx5 = $gistGetal5 * 25;
	
	// gist inclusief btw berekenen
	var $gistIn1 = $gistEx1 * 1.06;
	var $gistIn2 = $gistEx2 * 1.06;
	var $gistIn3 = $gistEx3 * 1.06;
	var $gistIn4 = $gistEx4 * 1.06;
	var $gistIn5 = $gistEx5 * 1.06;
	
	// innerHTML variablen locaties aanmaken (gist)
	var $gistRes1 = document.getElementById('gistResultaat1');
	var $gistRes2 = document.getElementById('gistResultaat2');
	var $gistRes3 = document.getElementById('gistResultaat3');
	var $gistRes4 = document.getElementById('gistResultaat4');
	var $gistRes5 = document.getElementById('gistResultaat5');
	
	// zoetwaren exclusief btw berekenen
	var $zoetEx1 = $zoetGetal1 * 5;
	var $zoetEx2 = $zoetGetal2 * 10;
	var $zoetEx3 = $zoetGetal3 * 15;
	var $zoetEx4 = $zoetGetal4 * 20;
	var $zoetEx5 = $zoetGetal5 * 25;
	
	// zoetwaren inclusief btw berekenen
	var $zoetIn1 = $zoetEx1 * 1.06;
	var $zoetIn2 = $zoetEx2 * 1.06;
	var $zoetIn3 = $zoetEx3 * 1.06;
	var $zoetIn4 = $zoetEx4 * 1.06;
	var $zoetIn5 = $zoetEx5 * 1.06;
	
	//  innerHTML variablen locaties aanmaken (zoetwaren)
	var $zoetRes1 = document.getElementById('zoetResultaat1');
	var $zoetRes2 = document.getElementById('zoetResultaat2');
	var $zoetRes3 = document.getElementById('zoetResultaat3');
	var $zoetRes4 = document.getElementById('zoetResultaat4');
	var $zoetRes5 = document.getElementById('zoetResultaat5');
	
	// bakmiddelen exclusief btw berekenen
	var $bakEx1 = $bakGetal1 * 5;
	var $bakEx2 = $bakGetal2 * 10;
	var $bakEx3 = $bakGetal3 * 15;
	var $bakEx4 = $bakGetal4 * 20;
	var $bakEx5 = $bakGetal5 * 25;
	var $bakEx6 = $bakGetal6 * 30;
	var $bakEx7 = $bakGetal7 * 35;
	var $bakEx8 = $bakGetal8 * 40;
	var $bakEx9 = $bakGetal9 * 45;
	var $bakEx10 = $bakGetal10 * 50;
	var $bakEx11 = $bakGetal11 * 55;
	var $bakEx12 = $bakGetal12 * 60;
	
	// bakproducten inclusief btw bakmiddelen
	var $bakIn1 = $bakEx1 * 1.06;
	var $bakIn2 = $bakEx2 * 1.06;
	var $bakIn3 = $bakEx3 * 1.06;
	var $bakIn4 = $bakEx4 * 1.06;
	var $bakIn5 = $bakEx5 * 1.06;
	var $bakIn6 = $bakEx6 * 1.06;
	var $bakIn7 = $bakEx7 * 1.06;
	var $bakIn8 = $bakEx8 * 1.06;
	var $bakIn9 = $bakEx9 * 1.06;
	var $bakIn10 = $bakEx10 * 1.06;
	var $bakIn11 = $bakEx11* 1.06;
	var $bakIn12 = $bakEx12 * 1.06;
	
	//  innerHTML variablen locaties aanmaken (bakmiddelen)
	var $bakRes1 = document.getElementById('bakResultaat1');
	var $bakRes2 = document.getElementById('bakResultaat2');
	var $bakRes3 = document.getElementById('bakResultaat3');
	var $bakRes4 = document.getElementById('bakResultaat4');
	var $bakRes5 = document.getElementById('bakResultaat5');
	var $bakRes6 = document.getElementById('bakResultaat6');
	var $bakRes7 = document.getElementById('bakResultaat7');
	var $bakRes8 = document.getElementById('bakResultaat8');
	var $bakRes9 = document.getElementById('bakResultaat9');
	var $bakRes10 = document.getElementById('bakResultaat10');
	var $bakRes11 = document.getElementById('bakResultaat11');
	var $bakRes12 = document.getElementById('bakResultaat12');
	
		// springvormen exclusief btw berekenen
	var $springEx1 = $springGetal1 * 5;
	var $springEx2 = $springGetal2 * 10;
	var $springEx3 = $springGetal3 * 15;
	var $springEx4 = $springGetal4 * 20;
	var $springEx5 = $springGetal5 * 25;
	var $springEx6 = $springGetal6 * 30;
	var $springEx7 = $springGetal7 * 35;
	var $springEx8 = $springGetal8 * 40;
	
	// springvormen inclusief btw berekenen
	var $springIn1 = $springEx1 * 1.06;
	var $springIn2 = $springEx2 * 1.06;
	var $springIn3 = $springEx3 * 1.06;
	var $springIn4 = $springEx4 * 1.06;
	var $springIn5 = $springEx5 * 1.06;
	var $springIn6 = $springEx6 * 1.06;
	var $springIn7 = $springEx7 * 1.06;
	var $springIn8 = $springEx8 * 1.06;
	
	//  innerHTML variablen locaties aanmaken (springvormen)
	var $springRes1 = document.getElementById('springResultaat1');
	var $springRes2 = document.getElementById('springResultaat2');
	var $springRes3 = document.getElementById('springResultaat3');
	var $springRes4 = document.getElementById('springResultaat4');
	var $springRes5 = document.getElementById('springResultaat5');
	var $springRes6 = document.getElementById('springResultaat6');
	var $springRes7 = document.getElementById('springResultaat7');
	var $springRes8 = document.getElementById('springResultaat8');
	
	// aanmaken variablen verpakkingsmiddelen
	var getalElement = document.getElementById('verpak1');
	var $verpakGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('verpak2');
	var $verpakGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('verpak3');
	var $verpakGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('verpak4');
	var $verpakGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('verpak5');
	var $verpakGetal5 = getalElement.value;
	
	var getalElement = document.getElementById('verpak6');
	var $verpakGetal6 = getalElement.value;
	
	var getalElement = document.getElementById('verpak7');
	var $verpakGetal7 = getalElement.value;
	
	var getalElement = document.getElementById('verpak8');
	var $verpakGetal8 = getalElement.value;
	
	var getalElement = document.getElementById('verpak9');
	var $verpakGetal9 = getalElement.value;
	
	var getalElement = document.getElementById('verpak10');
	var $verpakGetal10 = getalElement.value;
	
	var getalElement = document.getElementById('verpak11');
	var $verpakGetal11 = getalElement.value;
	
	var getalElement = document.getElementById('verpak12');
	var $verpakGetal12 = getalElement.value;
	
	var getalElement = document.getElementById('verpak13');
	var $verpakGetal13 = getalElement.value;
	
	var getalElement = document.getElementById('verpak14');
	var $verpakGetal14 = getalElement.value;
	
	var getalElement = document.getElementById('verpak15');
	var $verpakGetal15 = getalElement.value;
	
	var getalElement = document.getElementById('verpak16');
	var $verpakGetal16 = getalElement.value;
	
	var getalElement = document.getElementById('verpak17');
	var $verpakGetal17 = getalElement.value;
	
	var getalElement = document.getElementById('verpak18');
	var $verpakGetal18 = getalElement.value;
	
	var getalElement = document.getElementById('verpak19');
	var $verpakGetal19 = getalElement.value;
	
	var getalElement = document.getElementById('verpak20');
	var $verpakGetal20 = getalElement.value;
	
	var getalElement = document.getElementById('verpak21');
	var $verpakGetal21 = getalElement.value;
	
	// controle of dat er iets is ingevoerd
	if ($meelGetal1 + $meelGetal2 + $meelGetal3 + $meelGetal4 + $meelGetal5 + $gistGetal1 + $gistGetal2 + $gistGetal3 + $gistGetal4 + $gistGetal5 + $zoetGetal1  + $zoetGetal2  + $zoetGetal3 + $zoetGetal4  + $zoetGetal5
		+ $bakGetal1 + $bakGetal2 + $bakGetal3 + $bakGetal4 + $bakGetal5 + $bakGetal6 + $bakGetal7 + $bakGetal8 + $bakGetal9 + $bakGetal10 + $bakGetal11 + $bakGetal12 + $springGetal1 + $springGetal2 + $springGetal3 + $springGetal4 
		+ $springGetal5 + $springGetal6 + $springGetal7 + $springGetal8 + $verpakGetal1 + $verpakGetal2 + $verpakGetal3 + $verpakGetal4 + $verpakGetal5 + $verpakGetal6 + $verpakGetal7 + $verpakGetal8
		+ $verpakGetal9 + $verpakGetal10 + $verpakGetal11 + $verpakGetal12 + $verpakGetal13 + $verpakGetal14 + $verpakGetal15 + $verpakGetal16 + $verpakGetal17 + $verpakGetal18 + $verpakGetal19 + $verpakGetal20 + $verpakGetal21 == "") {
        alert("U moet iets invullen");
        return false;
     }
	 
	// popup openen.
	document.getElementById('popupResultaat').style.visibility = 'visible';
	document.getElementById('helepagina').style.opacity = '0.2';
	document.getElementById('popupContent').style.opacity = '1';
	document.getElementById('content').style.background = 'black';
	document.getElementsByTagName("body")[0].style.overflow = 'hidden';
	
	// verpakkingsmiddelen exclusief btw berekenen
	var $verpakEx1 = $verpakGetal1 * 5;
	var $verpakEx2 = $verpakGetal2 * 10;
	var $verpakEx3 = $verpakGetal3 * 15;
	var $verpakEx4 = $verpakGetal4 * 20;
	var $verpakEx5 = $verpakGetal5 * 25;
	var $verpakEx6 = $verpakGetal6 * 30;
	var $verpakEx7 = $verpakGetal7 * 35;
	var $verpakEx8 = $verpakGetal8 * 40;
	var $verpakEx9 = $verpakGetal9 * 45;
	var $verpakEx10 = $verpakGetal10 * 50;
	var $verpakEx11 = $verpakGetal11 * 55;
	var $verpakEx12 = $verpakGetal12 * 60;
	var $verpakEx13 = $verpakGetal13 * 65;
	var $verpakEx14 = $verpakGetal14 * 70;
	var $verpakEx15 = $verpakGetal15 * 75;
	var $verpakEx16 = $verpakGetal16 * 80;
	var $verpakEx17 = $verpakGetal17 * 85;
	var $verpakEx18 = $verpakGetal18 * 90;
	var $verpakEx19 = $verpakGetal19 * 95;
	var $verpakEx20 = $verpakGetal20 * 100;
	var $verpakEx21 = $verpakGetal21 * 105;
	
	// verpakkingsmiddelen inclusief btw berekenen
	var $verpakIn1 = $verpakEx1 * 1.21;
	var $verpakIn2 = $verpakEx2 * 1.21;
	var $verpakIn3 = $verpakEx3 * 1.21;
	var $verpakIn4 = $verpakEx4 * 1.21;
	var $verpakIn5 = $verpakEx5 * 1.21;
	var $verpakIn6 = $verpakEx6 * 1.21;
	var $verpakIn7 = $verpakEx7 * 1.21;
	var $verpakIn8 = $verpakEx8 * 1.21;
	var $verpakIn9 = $verpakEx9 * 1.21;
	var $verpakIn10 = $verpakEx10 * 1.21;
	var $verpakIn11 = $verpakEx11 * 1.21;
	var $verpakIn12 = $verpakEx12 * 1.21;
	var $verpakIn13 = $verpakEx13 * 1.21;
	var $verpakIn14 = $verpakEx14 * 1.21;
	var $verpakIn15 = $verpakEx15 * 1.21;
	var $verpakIn16 = $verpakEx16 * 1.21;
	var $verpakIn17 = $verpakEx17 * 1.21;
	var $verpakIn18 = $verpakEx18 * 1.21;
	var $verpakIn19 = $verpakEx19 * 1.21;
	var $verpakIn20 = $verpakEx20 * 1.21;
	var $verpakIn21 = $verpakEx21 * 1.21;
	
	
	//  innerHTML variablen locaties aanmaken (verpakkingsmiddelen)
	var $verpakRes1 = document.getElementById('verpakResultaat1');
	var $verpakRes2 = document.getElementById('verpakResultaat2');
	var $verpakRes3 = document.getElementById('verpakResultaat3');
	var $verpakRes4 = document.getElementById('verpakResultaat4');
	var $verpakRes5 = document.getElementById('verpakResultaat5');
	var $verpakRes6 = document.getElementById('verpakResultaat6');
	var $verpakRes7 = document.getElementById('verpakResultaat7');
	var $verpakRes8 = document.getElementById('verpakResultaat8');
	var $verpakRes9 = document.getElementById('verpakResultaat9');
	var $verpakRes10 = document.getElementById('verpakResultaat10');
	var $verpakRes11 = document.getElementById('verpakResultaat11');
	var $verpakRes12 = document.getElementById('verpakResultaat12');
	var $verpakRes13 = document.getElementById('verpakResultaat13');
	var $verpakRes14 = document.getElementById('verpakResultaat14');
	var $verpakRes15 = document.getElementById('verpakResultaat15');
	var $verpakRes16 = document.getElementById('verpakResultaat16');
	var $verpakRes17 = document.getElementById('verpakResultaat17');
	var $verpakRes18 = document.getElementById('verpakResultaat18');
	var $verpakRes19 = document.getElementById('verpakResultaat19');
	var $verpakRes20 = document.getElementById('verpakResultaat20');
	var $verpakRes21 = document.getElementById('verpakResultaat21');
	
	
	// aanmaken variablen meelproducten
	var getalElement = document.getElementById('meel1');
	var $meelGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('meel2');
	var $meelGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('meel3');
	var $meelGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('meel4');
	var $meelGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('meel5');
	var $meelGetal5 = getalElement.value;
	
// aanmaken variablen gistproducten
	var getalElement = document.getElementById('gist1');
	var $gistGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('gist2');
	var $gistGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('gist3');
	var $gistGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('gist4');
	var $gistGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('gist5');
	var $gistGetal5 = getalElement.value;
	
// aanmaken variablen zoetwaren
	var getalElement = document.getElementById('zoet1');
	var $zoetGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('zoet2');
	var $zoetGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('zoet3');
	var $zoetGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('zoet4');
	var $zoetGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('zoet5');
	var $zoetGetal5 = getalElement.value;
	
// aanmaken variablen bakmiddelen
	var getalElement = document.getElementById('bak1');
	var $bakGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('bak2');
	var $bakGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('bak3');
	var $bakGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('bak4');
	var $bakGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('bak5');
	var $bakGetal5 = getalElement.value;
	
	var getalElement = document.getElementById('bak6');
	var $bakGetal6 = getalElement.value;
	
	var getalElement = document.getElementById('bak7');
	var $bakGetal7 = getalElement.value;
	
	var getalElement = document.getElementById('bak8');
	var $bakGetal8 = getalElement.value;
	
	var getalElement = document.getElementById('bak9');
	var $bakGetal9 = getalElement.value;
	
	var getalElement = document.getElementById('bak10');
	var $bakGetal10 = getalElement.value;
	
	var getalElement = document.getElementById('bak11');
	var $bakGetal11 = getalElement.value;
	
	var getalElement = document.getElementById('bak12');
	var $bakGetal12 = getalElement.value;
	
// aanmaken variablen Springvormen
	var getalElement = document.getElementById('spring1');
	var $springGetal1 = getalElement.value;
	
	var getalElement = document.getElementById('spring2');
	var $springGetal2 = getalElement.value;
	
	var getalElement = document.getElementById('spring3');
	var $springGetal3 = getalElement.value;
	
	var getalElement = document.getElementById('spring4');
	var $springGetal4 = getalElement.value;
	
	var getalElement = document.getElementById('spring5');
	var $springGetal5 = getalElement.value;
	
	var getalElement = document.getElementById('spring6');
	var $springGetal6 = getalElement.value;
	
	var getalElement = document.getElementById('spring7');
	var $springGetal7 = getalElement.value;
	
	var getalElement = document.getElementById('spring8');
	var $springGetal8 = getalElement.value;
	
		//controleren of er iets is ingevult zoniet = overslaan. zoja dan berekening vermelden (meel).
	if ($meelEx1 == null || $meelEx1 == "") { 
	document.getElementById('meelResultaat1').style.visibility = 'hidden';	document.getElementById('meelResultaat1').style.height = '0px';
	}	else{
		document.getElementById('meelResultaat1').style.visibility = 'visible';
		$meelRes1.innerHTML = $meelGetal1 + ' x 1 kilogram meel van vijf euro';
		document.getElementById('meelResultaat1').style.height = '30px';
	}

	if ($meelEx2 == null || $meelEx2 == "") {	
	document.getElementById('meelResultaat2').style.visibility = 'hidden';	document.getElementById('meelResultaat2').style.height = '0px';
	}	else{
		document.getElementById('meelResultaat2').style.visibility = 'visible';
		$meelRes2.innerHTML = $meelGetal2 + ' x 2,5 kilogram meel van 10 euro';
		document.getElementById('meelResultaat2').style.height = '30px';
	}

	if ($meelEx3 == null || $meelEx3 == "") { 	
	document.getElementById('meelResultaat3').style.visibility = 'hidden';	document.getElementById('meelResultaat3').style.height = '0px';
	}	else{
		document.getElementById('meelResultaat3').style.visibility = 'visible';
		$meelRes3.innerHTML = $meelGetal3 + ' x 5 kilogram meel van 20 euro';
		document.getElementById('meelResultaat3').style.height = '30px';
	}

	if ($meelEx4 == null || $meelEx4 == "") {	
	document.getElementById('meelResultaat4').style.visibility = 'hidden';	document.getElementById('meelResultaat4').style.height = '0px';
	}	else{
		document.getElementById('meelResultaat4').style.visibility = 'visible';
		$meelRes4.innerHTML = $meelGetal4 + ' x 10 kilogram meel van 40 euro';
		document.getElementById('meelResultaat4').style.height = '30px';
	}

	if ($meelEx5 == null || $meelEx5 == "") {	
	document.getElementById('meelResultaat5').style.visibility = 'hidden';	document.getElementById('meelResultaat5').style.height = '0px';
	}	else{
		document.getElementById('meelResultaat5').style.visibility = 'visible';
		$meelRes5.innerHTML = $meelGetal5 + ' x 25 kilogram meel van 80 euro';
		document.getElementById('meelResultaat5').style.height = '30px';
	}
//+'<br />'

		// controleren of er iets is ingevult zoniet = overslaan. zoja dan berekening vermelden (gist).
	if ($gistEx1 == null || $gistEx1 == "") {	
	document.getElementById('gistResultaat1').style.visibility = 'hidden';	document.getElementById('gistResultaat1').style.height = '0px';
	}	else{
		document.getElementById('gistResultaat1').style.visibility = 'visible';
		$gistRes1.innerHTML = $gistGetal1 + ' x bakkers gist vijf euro';
		document.getElementById('gistResultaat1').style.height = '30px';
	}

	if ($gistEx2 == null || $gistEx2 == "") {	
	document.getElementById('gistResultaat2').style.visibility = 'hidden';	document.getElementById('gistResultaat1').style.height = '0px';
	}	else{
		document.getElementById('gistResultaat2').style.visibility = 'visible';
		$gistRes2.innerHTML = $gistGetal2 + ' x biergist van 10 euro';
		document.getElementById('gistResultaat2').style.height = '30px';
	}

	if ($gistEx3 == null || $gistEx3 == "") {	
	document.getElementById('gistResultaat3').style.visibility = 'hidden';	document.getElementById('gistResultaat3').style.height = '0px';
	}	else{
		document.getElementById('gistResultaat3').style.visibility = 'visible';
		$gistRes3.innerHTML = $gistGetal3 + ' x verse gist van 20 euro';
		document.getElementById('gistResultaat3').style.height = '30px';
	}

	if ($gistEx4 == null || $gistEx4 == "") {	
	document.getElementById('gistResultaat4').style.visibility = 'hidden';	document.getElementById('gistResultaat4').style.height = '0px';
	}	else{
		document.getElementById('gistResultaat4').style.visibility = 'visible';
		$gistRes4.innerHTML = $gistGetal4 + ' x gedroogde gist 7 gram van 40 euro';
		document.getElementById('gistResultaat4').style.height = '30px';
	}

	if ($gistEx5 == null || $gistEx5 == "") {	
	document.getElementById('gistResultaat5').style.visibility = 'hidden';	document.getElementById('gistResultaat5').style.height = '0px';
	}	else{
		document.getElementById('gistResultaat5').style.visibility = 'visible';
		document.getElementById('gistResultaat5').style.height = '30px';
		$gistRes5.innerHTML = $gistGetal5 + ' x instant gist 500 gram van 80 euro';
		
	}

		// controleren of er iets is ingevult zoniet = overslaan. zoja dan berekening vermelden (zoet).
	if ($zoetEx1 == null || $zoetEx1 == "") {
	document.getElementById('zoetResultaat1').style.visibility = 'hidden';	document.getElementById('zoetResultaat1').style.height = '0px';
	}	else{
		$zoetRes1.innerHTML = $zoetGetal1 + ' x 1 kilogram Suiker van vijf euro';
		document.getElementById('zoetResultaat1').style.visibility = 'visible';
		document.getElementById('zoetResultaat1').style.height = '30px';
	}

	if ($zoetEx2 == null || $zoetEx2 == "") {
	document.getElementById('zoetResultaat2').style.visibility = 'hidden';	document.getElementById('zoetResultaat2').style.height = '0px';
	}	else{
		$zoetRes2.innerHTML = $zoetGetal2 + ' x 2,5 kilogram Suiker van 10 euro';
		document.getElementById('zoetResultaat2').style.visibility = 'visible';
		document.getElementById('zoetResultaat2').style.height = '30px';
	}

	if ($zoetEx3 == null || $zoetEx3 == "") {
	document.getElementById('zoetResultaat3').style.visibility = 'hidden';	document.getElementById('zoetResultaat3').style.height = '0px';
	}	else{
		$zoetRes3.innerHTML = $zoetGetal3 + ' x 5 kilogram Suiker van 20 euro';
		document.getElementById('zoetResultaat3').style.visibility = 'visible';
		document.getElementById('zoetResultaat3').style.height = '30px';
	}

	if ($zoetEx4 == null || $zoetEx4 == "") {
	document.getElementById('zoetResultaat4').style.visibility = 'hidden';	document.getElementById('zoetResultaat4').style.height = '0px';
	}	else{
		$zoetRes4.innerHTML = $zoetGetal4 + ' x 10 kilogram Suiker van 40 euro';
		document.getElementById('zoetResultaat4').style.visibility = 'visible';
		document.getElementById('zoetResultaat4').style.height = '30px';
	}

	if ($zoetEx5 == null || $zoetEx5 == "") {
	document.getElementById('zoetResultaat5').style.visibility = 'hidden';	document.getElementById('zoetResultaat5').style.height = '0px';
	}	else{
		$zoetRes5.innerHTML = $zoetGetal5 + ' x 25 kilogram Suiker van 80 euro';
		document.getElementById('zoetResultaat5').style.visibility = 'visible';
		document.getElementById('zoetResultaat5').style.height = '30px';
	}

		// controleren of er iets is ingevult zoniet = overslaan. zoja dan berekening vermelden (bakmiddelen).
	if ($bakEx1 == null || $bakEx1 == "") {
	document.getElementById('bakResultaat1').style.visibility = 'hidden';	document.getElementById('bakResultaat1').style.height = '0px';
	}	else{
		$bakRes1.innerHTML = $bakGetal1 + ' x 1 breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('bakResultaat1').style.visibility = 'visible';
		document.getElementById('bakResultaat1').style.height = '30px';
	}

	if ($bakEx2 == null || $bakEx2 == "") {
	document.getElementById('bakResultaat2').style.visibility = 'hidden';	document.getElementById('bakResultaat2').style.height = '0px';
	}	else{
		$bakRes2.innerHTML = $bakGetal2 + ' x 1 breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('bakResultaat2').style.visibility = 'visible';
		document.getElementById('bakResultaat2').style.height = '30px';
	}

	if ($bakEx3 == null || $bakEx3 == "") {
	document.getElementById('bakResultaat3').style.visibility = 'hidden';	document.getElementById('bakResultaat3').style.height = '0px';
	}	else{
		$bakRes3.innerHTML = $bakGetal3 + ' x 1 breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('bakResultaat3').style.visibility = 'visible';
		document.getElementById('bakResultaat3').style.height = '30px';
	}

	if ($bakEx4 == null || $bakEx4 == "") {
	document.getElementById('bakResultaat4').style.visibility = 'hidden';	document.getElementById('bakResultaat4').style.height = '0px';
	}	else{
		$bakRes4.innerHTML = $bakGetal4 + ' x 1 breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('bakResultaat4').style.visibility = 'visible';
		document.getElementById('bakResultaat4').style.height = '30px';
	}

	if ($bakEx5 == null || $bakEx5 == "") {
	document.getElementById('bakResultaat5').style.visibility = 'hidden';	document.getElementById('bakResultaat5').style.height = '0px';
	}	else{
		$bakRes5.innerHTML = $bakGetal5 + ' x 1 breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('bakResultaat5').style.visibility = 'visible';
		document.getElementById('bakResultaat5').style.height = '30px';
	}

	if ($bakEx6 == null || $bakEx6 == "") {
	document.getElementById('bakResultaat6').style.visibility = 'hidden';	document.getElementById('bakResultaat6').style.height = '0px';
	}	else{
		$bakRes6.innerHTML = $bakGetal6 + ' x 1 breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('bakResultaat6').style.visibility = 'visible';
		document.getElementById('bakResultaat6').style.height = '30px';
	}

	if ($bakEx7 == null || $bakEx7 == "") {
	document.getElementById('bakResultaat7').style.visibility = 'hidden';	document.getElementById('bakResultaat7').style.height = '0px';
	}	else{
		$bakRes7.innerHTML = $bakGetal7 + ' x 1 breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('bakResultaat7').style.visibility = 'visible';
		document.getElementById('bakResultaat7').style.height = '30px';
	}

	if ($bakEx8 == null || $bakEx8 == "") {
	document.getElementById('bakResultaat8').style.visibility = 'hidden';	document.getElementById('bakResultaat8').style.height = '0px';
	}	else{
		$bakRes8.innerHTML = $bakGetal8 + ' x 1 breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('bakResultaat8').style.visibility = 'visible';
		document.getElementById('bakResultaat8').style.height = '30px';
	}

	if ($bakEx9 == null || $bakEx9 == "") {
	document.getElementById('bakResultaat9').style.visibility = 'hidden';	document.getElementById('bakResultaat9').style.height = '0px';
	}	else{
		$bakRes9.innerHTML = $bakGetal9+ ' x 1 breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('bakResultaat9').style.visibility = 'visible';
		document.getElementById('bakResultaat9').style.height = '30px';
	}

	if ($bakEx10 == null || $bakEx10 == "") {
	document.getElementById('bakResultaat10').style.visibility = 'hidden';	document.getElementById('bakResultaat10').style.height = '0px';
	}	else{
		$bakRes10.innerHTML = $bakGetal10 + ' x 1 breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('bakResultaat10').style.visibility = 'visible';
		document.getElementById('bakResultaat10').style.height = '30px';
	}

	if ($bakEx11 == null || $bakEx11 == "") {
	document.getElementById('bakResultaat11').style.visibility = 'hidden';	document.getElementById('bakResultaat11').style.height = '0px';
	}	else{
		$bakRes11.innerHTML = $bakGetal11 + ' x 1 breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('bakResultaat11').style.visibility = 'visible';
		document.getElementById('bakResultaat11').style.height = '30px';
	}

	if ($bakEx12 == null || $bakEx12 == "") {
	document.getElementById('bakResultaat12').style.visibility = 'hidden';	document.getElementById('bakResultaat12').style.height = '0px';
	}	else{
		$bakRes12.innerHTML = $bakGetal12 + ' x 1 breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('bakResultaat12').style.visibility = 'visible';
		document.getElementById('bakResultaat12').style.height = '30px';
	}
	
		// controleren of er iets is ingevult zoniet = overslaan. zoja dan berekening vermelden (springvormen).
	if ($springEx1 == null || $springEx1 == "") {  
	}	else{
		$springRes1.innerHTML = $springGetal1 + ' x 1 diameter 10cm x hoogte 5cm' + ' kost ';
		document.getElementById('springResultaat1').style.visibility = 'visible';
		document.getElementById('springResultaat1').style.height = '30px';
	}

			// controleren of er iets is ingevult zoniet = overslaan. zoja dan berekening vermelden (springvormen).
	if ($springEx2 == null || $springEx2 == "") {
	}	else{
		$springRes2.innerHTML = $springGetal2 + ' x 1 diameter 20cm x hoogte 5cm van vijf euro';
		document.getElementById('springResultaat2').style.visibility = 'visible';
		document.getElementById('springResultaat2').style.height = '30px';
	}

			// controleren of er iets is ingevult zoniet = overslaan. zoja dan berekening vermelden (springvormen).
	if ($springEx3 == null || $springEx3 == "") {
	}	else{
		$springRes3.innerHTML = $springGetal3 + ' x 1 diameter 25cm x hoogte 5cm van vijf euro';
		document.getElementById('springResultaat3').style.visibility = 'visible';
		document.getElementById('springResultaat3').style.height = '30px';
	}

			// controleren of er iets is ingevult zoniet = overslaan. zoja dan berekening vermelden (springvormen).
	if ($springEx4 == null || $springEx4 == "") {
	}	else{
		$springRes4.innerHTML = $springGetal4 + ' x 1 diameter 30cm x hoogte 5cm van vijf euro';
		document.getElementById('springResultaat4').style.visibility = 'visible';
		document.getElementById('springResultaat4').style.height = '30px';
	}

			// controleren of er iets is ingevult zoniet = overslaan. zoja dan berekening vermelden (springvormen).
	if ($springEx5 == null || $springEx5 == "") {
	}	else{
		$springRes5.innerHTML = $springGetal5 + ' x 1 diameter 10cm x hoogte 6cm van vijf euro';
		document.getElementById('springResultaat5').style.visibility = 'visible';
		document.getElementById('springResultaat5').style.height = '30px';
	}

			// controleren of er iets is ingevult zoniet = overslaan. zoja dan berekening vermelden (springvormen).
	if ($springEx6 == null || $springEx6 == "") {
	}	else{
		$springRes6.innerHTML = $springGetal6 + ' x 1 diameter 10cm x hoogte 6cm van vijf euro';
		document.getElementById('springResultaat6').style.visibility = 'visible';
		document.getElementById('springResultaat6').style.height = '30px';
	}
	
			// controleren of er iets is ingevult zoniet = overslaan. zoja dan berekening vermelden (springvormen).
	if ($springEx7 == null || $springEx7 == "") {
	}	else{
		$springRes7.innerHTML = $springGetal7 + ' x 1 diameter 25cm x hoogte 6cm van vijf euro';
		document.getElementById('springResultaat7').style.visibility = 'visible';
		document.getElementById('springResultaat7').style.height = '30px';
	}
	
	if ($springEx8 == null || $springEx8 == "") {  
	}	else{
		$springRes8.innerHTML = $springGetal8 + ' x 1 diameter 30cm x hoogte 6cm van vijf euro';
		document.getElementById('springResultaat8').style.visibility = 'visible';
		document.getElementById('springResultaat8').style.height = '30px';
	}
	
	if ($verpakEx1 == null || $verpakEx1 == "") {  
	document.getElementById('verpakResultaat1').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat1').style.height = '0px';
	}	else{
		$verpakRes1.innerHTML = $verpakGetal1 + $verpakEx1 +' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat1').style.visibility = 'visible';
		document.getElementById('verpakResultaat1').style.height = '30px';
	}
	
	if ($verpakEx2 == null || $verpakEx2 == "") {  
	document.getElementById('verpakResultaat2').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat2').style.height = '0px';
	}	else{
		$verpakRes2.innerHTML = $verpakGetal2 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat2').style.visibility = 'visible';
		document.getElementById('verpakResultaat2').style.height = '30px';
	}
	
	if ($verpakEx3 == null || $verpakEx3 == "") {  
	document.getElementById('verpakResultaat3').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat3').style.height = '0px';
	}	else{
		$verpakRes3.innerHTML = $verpakGetal3 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat3').style.visibility = 'visible';
		document.getElementById('verpakResultaat3').style.height = '30px';
	}
	
	if ($verpakEx4 == null || $verpakEx4 == "") {  
	document.getElementById('verpakResultaat4').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat4').style.height = '0px';
	}	else{
		$verpakRes4.innerHTML = $verpakGetal4 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat4').style.visibility = 'visible';
		document.getElementById('verpakResultaat4').style.height = '30px';
	}
	
	if ($verpakEx5 == null || $verpakEx5 == "") {  
	document.getElementById('verpakResultaat5').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat5').style.height = '0px';
	}	else{
		$verpakRes5.innerHTML = $verpakGetal5 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat5').style.visibility = 'visible';
		document.getElementById('verpakResultaat5').style.height = '30px';
	}
	
	if ($verpakEx6 == null || $verpakEx6 == "") {  
	document.getElementById('verpakResultaat6').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat6').style.height = '0px';
	}	else{
		$verpakRes6.innerHTML = $verpakGetal6 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat6').style.visibility = 'visible';
		document.getElementById('verpakResultaat6').style.height = '30px';
	}
	
	if ($verpakEx7 == null || $verpakEx7 == "") {  
	document.getElementById('verpakResultaat7').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat7').style.height = '0px';
	}	else{
		$verpakRes7.innerHTML = $verpakGetal7 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat7').style.visibility = 'visible';
		document.getElementById('verpakResultaat7').style.height = '30px';
	}
	
	if ($verpakEx8 == null || $verpakEx8 == "") {  
	document.getElementById('verpakResultaat8').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat8').style.height = '0px';
	}	else{
		$verpakRes8.innerHTML = $verpakGetal8 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat8').style.visibility = 'visible';
		document.getElementById('verpakResultaat8').style.height = '30px';
	}
	
	if ($verpakEx9 == null || $verpakEx9 == "") {  
	document.getElementById('verpakResultaat9').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat9').style.height = '0px';
	}	else{
		$verpakRes9.innerHTML = $verpakGetal9 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat9').style.visibility = 'visible';
		document.getElementById('verpakResultaat9').style.height = '30px';
	}
	
	if ($verpakEx10 == null || $verpakEx10 == "") {  
	document.getElementById('verpakResultaat10').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat10').style.height = '0px';
	}	else{
		$verpakRes10.innerHTML = $verpakGetal10 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat10').style.visibility = 'visible';
		document.getElementById('verpakResultaat10').style.height = '30px';
	}
	
	if ($verpakEx11 == null || $verpakEx11 == "") {  
	document.getElementById('verpakResultaat11').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat11').style.height = '0px';
	}	else{
		$verpakRes11.innerHTML = $verpakGetal11 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat11').style.visibility = 'visible';
		document.getElementById('verpakResultaat11').style.height = '30px';
	}
	
	if ($verpakEx12 == null || $verpakEx12 == "") {  
	document.getElementById('verpakResultaat12').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat12').style.height = '0px';
	}	else{
		$verpakRes12.innerHTML = $verpakGetal12 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat12').style.visibility = 'visible';
		document.getElementById('verpakResultaat12').style.height = '30px';
	}
	
	if ($verpakEx13 == null || $verpakEx13 == "") {  
	document.getElementById('verpakResultaat13').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat13').style.height = '0px';
	}	else{
		$verpakRes13.innerHTML = $verpakGetal13 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat13').style.visibility = 'visible';
		document.getElementById('verpakResultaat13').style.height = '30px';
	}
	
	if ($verpakEx14 == null || $verpakEx14 == "") {  
	document.getElementById('verpakResultaat14').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat14').style.height = '0px';
	}	else{
		$verpakRes14.innerHTML = $verpakGetal14 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat14').style.visibility = 'visible';
		document.getElementById('verpakResultaat14').style.height = '30px';
	}
	
	if ($verpakEx15 == null || $verpakEx15 == "") {  
	document.getElementById('verpakResultaat15').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat15').style.height = '0px';
	}	else{
		$verpakRes15.innerHTML = $verpakGetal15 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat15').style.visibility = 'visible';
		document.getElementById('verpakResultaat15').style.height = '30px';
	}
	
	if ($verpakEx16 == null || $verpakEx16 == "") {  
	document.getElementById('verpakResultaat16').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat16').style.height = '0px';
	}	else{
		$verpakRes16.innerHTML = $verpakGetal16 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat16').style.visibility = 'visible';
		document.getElementById('verpakResultaat16').style.height = '30px';
	}
	
	if ($verpakEx17 == null || $verpakEx17 == "") {  
	document.getElementById('verpakResultaat17').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat17').style.height = '0px';
	}	else{
		$verpakRes17.innerHTML = $verpakGetal17 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat17').style.visibility = 'visible';
		document.getElementById('verpakResultaat17').style.height = '30px';
	}
	
		if ($verpakEx18 == null || $verpakEx18 == "") {  
		document.getElementById('verpakResultaat18').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat18').style.height = '0px';
	}	else{
		$verpakRes18.innerHTML = $verpakGetal18 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat18').style.visibility = 'visible';
		document.getElementById('verpakResultaat18').style.height = '30px';
	}
	
	if ($verpakEx19 == null || $verpakEx19 == "") {  
	document.getElementById('verpakResultaat19').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat19').style.height = '0px';
	}	else{
		$verpakRes19.innerHTML = $verpakGetal19 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat19').style.visibility = 'visible';
		document.getElementById('verpakResultaat19').style.height = '30px';
	}
	
		if ($verpakEx20 == null || $verpakEx20 == "") { 
		document.getElementById('verpakResultaat20').style.visibility = 'hidden';	
		document.getElementById('verpakResultaat20').style.height = '0px';
	}	else{
		$verpakRes20.innerHTML = $verpakGetal20 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat20').style.visibility = 'visible';
		document.getElementById('verpakResultaat20').style.height = '30px';
	}
	
	if ($verpakEx21 == null || $verpakEx21 == "") {  
	document.getElementById('verpakResultaat21').style.visibility = 'hidden';	
	document.getElementById('verpakResultaat21').style.height = '0px';
	}	else{
		$verpakRes21.innerHTML = $verpakGetal21 + ' x 1 kartonnen doos met doorkijkvenster diameter breedte 5cm x lengte 10cm x hoogte 5cm van vijf euro';
		document.getElementById('verpakResultaat21').style.visibility = 'visible';
		document.getElementById('verpakResultaat21').style.height = '30px';
	}
	
}