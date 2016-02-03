//aanmaken globale variablen
var $meel1;
var $meel2;
var $meel5;
var $meel10;
var $meel25;

var $gist1;
var $gist2;
var $gist3;
var $gist4;
var $gist5;

var $suiker1;
var $suiker2;
var $suiker3;
var $suiker4;
var $suiker5;

var $bakblik1;
var $bakblik2;
var $bakblik3;
var $bakblik4;
var $bakblik5;
var $bakblik6;
var $bakblik7;
var $bakblik8;
var $bakblik9;
var $bakblik10;
var $bakblik11;
var $bakblik12;

var $spring1;
var $spring2;
var $spring3;
var $spring4;
var $spring5;
var $spring6;
var $spring7;
var $spring8;

var $doosblik1;
var $doosblik2;
var $doosblik3;
var $doosblik4;
var $doosblik5;
var $doosblik6;
var $doosblik7;
var $doosblik8;
var $doosblik9;
var $doosblik10;
var $doosblik11;
var $doosblik12;

var $springdoos1;
var $springdoos2;
var $springdoos3;
var $springdoos4;
var $springdoos5;
var $springdoos6;
var $springdoos7;
var $springdoos8;

var res;

var $resultaatDoosblik;
var $resultaatMeel;
var $resultaatGist;
var $resultaatSuiker;
var $resultaatBakblik;
var $resultaatSpring;
var $resultaatSpringdoos;

function verzendInfo() {
    //oproepen variablen change function
    change();

    //aanmaken variablen
    var $voornaam = document.getElementById('voornaam').value;
    var $tussenvoegsel = document.getElementById('tussenvoegsel').value;
    var $achternaam = document.getElementById('achternaam').value;
	var $email = document.getElementById('email').value;
    var $straat = document.getElementById('straat').value;
    var $postcode = document.getElementById('postcode').value;
	var $woonplaats = document.getElementById('woonplaats').value;
    var $provincie = document.getElementById('provincie').value;
    var $iban = document.getElementById('iban').value;
    var $geboortedatum = document.getElementById('geboortedatum').value;

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
  
    // geen cijfer validatie
    if (isNaN($voornaam) && isNaN($achternaam)){
        
    }   else{
        alert('Uw voor en/of achternaam kan geen cijfers bevatten');
        return false;
    }
    
    //iban no specials characters
    if( /[^a-zA-Z0-9\-\/]/.test( $iban ) ) {
        alert('U mag geen speciale tekens invullen bij "IBAN"');
        return false;
    }

    // popup openen.
	document.getElementById('popupResultaat').style.visibility = 'visible';
	document.getElementById('popupContent').style.opacity = '1';
	document.getElementsByTagName("body")[0].style.overflow = 'hidden';

    res = document.getElementById('factuur')
    var content;

    //meel naar popup
    if($meel1 != 0){
        var aantal = document.getElementById('meel1').value;
        content = document.createTextNode(aantal + ' * 1 kilogram meel = ' + $meel1 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }   

    if($meel2 != 0){
        var aantal = document.getElementById('meel2').value;
        content = document.createTextNode(aantal + ' * 2,5 kilogram meel = ' + $meel2 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }   

    if($meel5 != 0){
        var aantal = document.getElementById('meel5').value;
        content = document.createTextNode(aantal + ' * 5 kilogram meel = ' + $meel2 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }  

    if($meel10 != 0){
        var aantal = document.getElementById('meel10').value;
        content = document.createTextNode(aantal + ' * 10 kilogram meel = ' + $meel2 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }  

    if($meel25 != 0){
        var aantal = document.getElementById('meel25').value;
        content = document.createTextNode(aantal + ' * 25 kilogram meel = ' + $meel2 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }  

    //gist naar popup
    if($gist1 != 0){
        var aantal = document.getElementById('gist1').value;
        content = document.createTextNode(aantal + ' * bakkers gist = ' + $gist1 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }  

    if($gist2 != 0){
        var aantal = document.getElementById('gist2').value;
        content = document.createTextNode(aantal + ' * biergist = ' + $gist2 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }  

    if($gist3 != 0){
        var aantal = document.getElementById('gist3').value;
        content = document.createTextNode(aantal + ' * verse gist = ' + $gist3 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }  

    if($gist4 != 0){
        var aantal = document.getElementById('gist4').value;
        content = document.createTextNode(aantal + ' * gedroogde gist = ' + $gist4 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }  

    if($gist5 != 0){
        var aantal = document.getElementById('gist5').value;
        content = document.createTextNode(aantal + ' * instant gist = ' + $gist5 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }  

    //suiker naar popup
    if($suiker1 != 0){
        var aantal = document.getElementById('suiker1').value;
        content = document.createTextNode(aantal + ' * 1 kilogram suiker = ' + $suiker1 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($suiker2 != 0){
        var aantal = document.getElementById('suiker2').value;
        content = document.createTextNode(aantal + ' * 2,5 kilogram suiker = ' + $suiker2 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($suiker3 != 0){
        var aantal = document.getElementById('suiker3').value;
        content = document.createTextNode(aantal + ' * 5 kilogram suiker = ' + $suiker3 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($suiker4 != 0){
        var aantal = document.getElementById('suiker4').value;
        content = document.createTextNode(aantal + ' * 10 kilogram suiker = ' + $suiker4 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($suiker5 != 0){
        var aantal = document.getElementById('suiker5').value;
        content = document.createTextNode(aantal + ' * 25 kilogram suiker = ' + $suiker5 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    //bakblikken naar popup
    if($bakblik1 != 0){
        var aantal = document.getElementById('bakblik1').value;
        content = document.createTextNode(aantal + ' * breedte 5cm x lengte 10cm x hoogte 5cm = ' + $bakblik1 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($bakblik2 != 0){
        var aantal = document.getElementById('bakblik2').value;
        content = document.createTextNode(aantal + ' * breedte 5cm x lengte 20cm x hoogte 5cm = ' + $bakblik2 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($bakblik3 != 0){
        var aantal = document.getElementById('bakblik3').value;
        content = document.createTextNode(aantal + ' * breedte 5cm x lengte 25cm x hoogte 5cm = ' + $bakblik3 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($bakblik4 != 0){
        var aantal = document.getElementById('bakblik4').value;
        content = document.createTextNode(aantal + ' * breedte 6cm x lengte 10cm x hoogte 5cm = ' + $bakblik4 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($bakblik5 != 0){
        var aantal = document.getElementById('bakblik5').value;
        content = document.createTextNode(aantal + ' * breedte 6cm x lengte 20cm x hoogte 5cm = ' + $bakblik5 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($bakblik6 != 0){
        var aantal = document.getElementById('bakblik6').value;
        content = document.createTextNode(aantal + ' * breedte 6cm x lengte 25cm x hoogte 5cm = ' + $bakblik6 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($bakblik7 != 0){
        var aantal = document.getElementById('bakblik7').value;
        content = document.createTextNode(aantal + ' * breedte 5cm x lengte 10cm x hoogte 6cm = ' + $bakblik7 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($bakblik8 != 0){
        var aantal = document.getElementById('bakblik8').value;
        content = document.createTextNode(aantal + ' * breedte 5cm x lengte 20cm x hoogte 6cm = ' + $bakblik8 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($bakblik9 != 0){
        var aantal = document.getElementById('bakblik9').value;
        content = document.createTextNode(aantal + ' * breedte 5cm x lengte 25cm x hoogte 6cm = ' + $bakblik9 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($bakblik10 != 0){
        var aantal = document.getElementById('bakblik10').value;
        content = document.createTextNode(aantal + ' * breedte 6cm x lengte 10cm x hoogte 6cm = ' + $bakblik10 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($bakblik11 != 0){
        var aantal = document.getElementById('bakblik11').value;
        content = document.createTextNode(aantal + ' * breedte 6cm x lengte 20cm x hoogte 6cm = ' + $bakblik11 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($bakblik12 != 0){
        var aantal = document.getElementById('bakblik12').value;
        content = document.createTextNode(aantal + ' * breedte 6cm x lengte 25cm x hoogte 6cm = ' + $bakblik12 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    //springvormen naar popup
    if($spring1 != 0){
        var aantal = document.getElementById('spring1').value;
        content = document.createTextNode(aantal + ' * diameter 10cm x hoogte 5cm = ' + $spring1 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($spring2 != 0){
        var aantal = document.getElementById('spring2').value;
        content = document.createTextNode(aantal + ' * diameter 20cm x hoogte 5cm = ' + $spring2 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($spring3 != 0){
        var aantal = document.getElementById('spring3').value;
        content = document.createTextNode(aantal + ' * diameter 25cm x hoogte 5cm = ' + $spring3 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($spring4 != 0){
        var aantal = document.getElementById('spring4').value;
        content = document.createTextNode(aantal + ' * diameter 30cm x hoogte 5cm = ' + $spring4 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($spring5 != 0){
        var aantal = document.getElementById('spring5').value;
        content = document.createTextNode(aantal + ' * diameter 10cm x hoogte 6cm = ' + $spring5 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($spring6 != 0){
        var aantal = document.getElementById('spring6').value;
        content = document.createTextNode(aantal + ' * diameter 20cm x hoogte 6cm = ' + $spring6 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($spring7 != 0){
        var aantal = document.getElementById('spring7').value;
        content = document.createTextNode(aantal + ' * diameter 25cm x hoogte 6cm = ' + $spring7 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($spring8 != 0){
        var aantal = document.getElementById('spring8').value;
        content = document.createTextNode(aantal + ' * diameter 30cm x hoogte 6cm = ' + $spring8 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($doosblik1 != 0){
        var aantal = document.getElementById('doosblik1').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit bakblik (breedte 5cm x lengte 10cm x hoogte 5cm) = ' + $doosblik1 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($doosblik2 != 0){
        var aantal = document.getElementById('doosblik2').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit bakblik (breedte 5cm x lengte 20cm x hoogte 5cm) = ' + $doosblik2 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($doosblik3 != 0){
        var aantal = document.getElementById('doosblik3').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit bakblik (breedte 5cm x lengte 25cm x hoogte 5cm) = ' + $doosblik3 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($doosblik4 != 0){
        var aantal = document.getElementById('doosblik4').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit bakblik (breedte 6cm x lengte 10cm x hoogte 5cm) = ' + $doosblik4 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($doosblik5 != 0){
        var aantal = document.getElementById('doosblik5').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit bakblik (breedte 6cm x lengte 10cm x hoogte 5cm) = ' + $doosblik5 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($doosblik6 != 0){
        var aantal = document.getElementById('doosblik6').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit bakblik (breedte 6cm x lengte 2cm x hoogte 5cm) = ' + $doosblik6 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($doosblik7 != 0){
        var aantal = document.getElementById('doosblik7').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit bakblik (breedte 5cm x lengte 10cm x hoogte 6cm) = ' + $doosblik7 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($doosblik8 != 0){
        var aantal = document.getElementById('doosblik8').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit bakblik (breedte 5cm x lengte 20cm x hoogte 6cm) = ' + $doosblik8 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($doosblik9 != 0){
        var aantal = document.getElementById('doosblik9').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit bakblik (breedte 5cm x lengte 25cm x hoogte 6cm) = ' + $doosblik9 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($doosblik10 != 0){
        var aantal = document.getElementById('doosblik10').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit bakblik (breedte 6cm x lengte 10cm x hoogte 6cm) = ' + $doosblik10 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($doosblik11 != 0){
        var aantal = document.getElementById('doosblik11').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit bakblik (breedte 6cm x lengte 20cm x hoogte 6cm) = ' + $doosblik11 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($doosblik12 != 0){
        var aantal = document.getElementById('doosblik12').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit bakblik (breedte 6cm x lengte 25cm x hoogte 6cm) = ' + $doosblik12 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($springdoos1 != 0){
        var aantal = document.getElementById('springdoos1').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit springvorm (diameter 10cm x hoogte 5cm) = ' + $springdoos1 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($springdoos2 != 0){
        var aantal = document.getElementById('springdoos2').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit springvorm (diameter 20cm x hoogte 5cm) = ' + $springdoos2 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($springdoos3 != 0){
        var aantal = document.getElementById('springdoos3').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit springvorm (diameter 25cm x hoogte 5cm) = ' + $springdoos3 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($springdoos4 != 0){
        var aantal = document.getElementById('springdoos4').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit springvorm (diameter 30cm x hoogte 5cm) = ' + $springdoos4 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($springdoos5 != 0){
        var aantal = document.getElementById('springdoos5').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit springvorm (diameter 10cm x hoogte 6cm) = ' + $springdoos5 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($springdoos6 != 0){
        var aantal = document.getElementById('springdoos6').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit springvorm (diameter 20cm x hoogte 6cm) = ' + $springdoos6 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($springdoos7 != 0){
        var aantal = document.getElementById('springdoos7').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit springvorm (diameter 25cm x hoogte 6cm) = ' + $springdoos7 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    if($springdoos8 != 0){
        var aantal = document.getElementById('springdoos8').value;
        content = document.createTextNode(aantal + ' * Voor eetproduct uit springvorm (diameter 30cm x hoogte 6cm) = ' + $springdoos8 + ' euro');
        res.appendChild(document.createElement("br"));
        res.appendChild(content);
    }

    //totaal kosten berekenen
    var totaal = $resultaatBakblik + $resultaatDoosblik + $resultaatGist + $resultaatMeel + $resultaatSpring + $resultaatSpringdoos + $resultaatSuiker;
    var btw = (totaal * 0.06).toFixed(2);
    var totaalBTW = (totaal * 1.06).toFixed(2);

    //totaalkosten factuur printen
    res.appendChild(document.createElement("hr"));
    content = document.createTextNode('De totaalkosten exclusief BTW zijn: ' + totaal + ' euro');
    res.appendChild(content);
    res.appendChild(document.createElement("br"));
    content = document.createTextNode('6% BTW: ' + btw + ' euro');
    res.appendChild(content);
    res.appendChild(document.createElement("hr"));
    content = document.createTextNode('De totaalkosten inclusief BTW zijn: ' + totaalBTW + ' euro');
    res.appendChild(content);
 
}

function closeButton()	{
	document.getElementById('popupResultaat').style.visibility = 'hidden';
	document.getElementsByTagName("body")[0].style.overflow = 'scroll';

    // popup factuur legen
    for (i = 0; i < 110; i++) { 
    res.removeChild(res.firstChild);
    }
}

function change() {
    // variablen meel waarde ophalen
    $meel1 = (document.getElementById('meel1').value * 2.50);
    $meel2 = (document.getElementById('meel2').value * 5);
    $meel5 = (document.getElementById('meel5').value * 10);
    $meel10 = (document.getElementById('meel10').value * 19);
    $meel25 = (document.getElementById('meel25').value * 30);

    // totaalkosten Meel bereken
        $resultaatMeel = +$meel1 + +$meel2 + +$meel5 + +$meel10 + +$meel25;
    var $omzetBTW = ($resultaatMeel * 1.06).toFixed(2);

    /*
    // resultaat Meel printen
    var res = document.getElementById('resultaatMeel').innerHTML = $resultaatMeel;
    var res = document.getElementById('resultaatMeelBTW').innerHTML = $omzetBTW;
    */
    // variablen gist waarde ophalen
    $gist1 = (document.getElementById('gist1').value * 10);
    $gist2 = (document.getElementById('gist2').value * 20);
    $gist3 = (document.getElementById('gist3').value * 30);
    $gist4 = (document.getElementById('gist4').value * 40);
    $gist5 = (document.getElementById('gist5').value * 50);

     // totaalkosten gist bereken
        $resultaatGist = +$gist1 + +$gist2 + +$gist3 + +$gist4 + +$gist5;
    var $omzetBTW = ($resultaatGist * 1.06).toFixed(2);

    /*
    // resultaat gist printen
    var res = document.getElementById('resultaatGist').innerHTML = $resultaatGist;
    var res = document.getElementById('resultaatGistBTW').innerHTML = $omzetBTW;
    */

    // variablen suiker waarde ophalen
    $suiker1 = (document.getElementById('suiker1').value * 1);
    $suiker2 = (document.getElementById('suiker2').value * 2);
    $suiker3 = (document.getElementById('suiker3').value * 3);
    $suiker4 = (document.getElementById('suiker4').value * 4);
    $suiker5 = (document.getElementById('suiker5').value * 5);

     // totaalkosten suiker bereken

        $resultaatSuiker = +$suiker1 + +$suiker2 + +$suiker3 + +$suiker4 + +$suiker5;
    var $omzetBTW = ($resultaatSuiker * 1.06).toFixed(2);

    /* resultaat suiker printen
    var res = document.getElementById('resultaatSuiker').innerHTML = $resultaatSuiker;
    var res = document.getElementById('resultaatSuikerBTW').innerHTML = $omzetBTW;
    */

    // totaalkosten voedingsmiddelen berekenen
    var $totaalVoeding = $resultaatSuiker + $resultaatGist + $resultaatMeel;
    var $totaalVoedingBTW = $totaalVoeding * 1.06;

    // totaalkosten voedingsmiddelen printen
    var res = document.getElementById('totaalVoeding').innerHTML = $totaalVoeding.toFixed(2);
    var res = document.getElementById('totaalVoedingBTW').innerHTML = $totaalVoedingBTW.toFixed(2);
    
    //  variablen bakblikken waarde ophalen
    $bakblik1 = (document.getElementById('bakblik1').value * 1);
    $bakblik2 = (document.getElementById('bakblik2').value * 2);
    $bakblik3 = (document.getElementById('bakblik3').value * 3);
    $bakblik4 = (document.getElementById('bakblik4').value * 4);
    $bakblik5 = (document.getElementById('bakblik5').value * 5);
    $bakblik6 = (document.getElementById('bakblik6').value * 6);
    $bakblik7 = (document.getElementById('bakblik7').value * 7);
    $bakblik8 = (document.getElementById('bakblik8').value * 8);
    $bakblik9 = (document.getElementById('bakblik9').value * 9);
    $bakblik10 = (document.getElementById('bakblik10').value * 10);
    $bakblik11 = (document.getElementById('bakblik11').value * 11);
    $bakblik12 = (document.getElementById('bakblik12').value * 12);

   
     // totaalkosten bakblikken bereken
        $resultaatBakblik = +$bakblik1 + +$bakblik2 + +$bakblik3 + +$bakblik4 + +$bakblik5 +$bakblik6 +$bakblik7 +$bakblik8 +$bakblik9 +$bakblik10 +$bakblik11 +$bakblik12 ;
    var $omzetBTW = ($resultaatBakblik * 1.06).toFixed(2);
     
     /*
    // resultaat bakblikken printen
    var res = document.getElementById('resultaatBakblik').innerHTML = $resultaatBakblik;
    var res = document.getElementById('resultaatBakblikBTW').innerHTML = $omzetBTW;
    */
    
    
    // variablen springvormen waarde ophalen
    $spring1 = (document.getElementById('spring1').value * 5);
    $spring2 = (document.getElementById('spring2').value * 10);
    $spring3 = (document.getElementById('spring3').value * 15);
    $spring4 = (document.getElementById('spring4').value * 20);
    $spring5 = (document.getElementById('spring5').value * 25);
    $spring6 = (document.getElementById('spring6').value * 30);
    $spring7 = (document.getElementById('spring7').value * 35);
    $spring8 = (document.getElementById('spring8').value * 40);
   
     // totaalkosten springvormen bereken
        $resultaatSpring = +$spring1 + +$spring2 + +$spring3 + +$spring4 + +$spring5 +$spring6 +$spring7 +$spring8;
    var $omzetBTW = ($resultaatSpring * 1.06).toFixed(2);

    /*
    // resultaat springvormen printen
    var res = document.getElementById('resultaatSpring').innerHTML = $resultaatSpring;
    var res = document.getElementById('resultaatSpringBTW').innerHTML = $omzetBTW;
    */
    
    // totaalkosten bakmiddelen berekenen
    var $totaalVoeding = $resultaatSpring + $resultaatBakblik;
    var $totaalVoedingBTW = $totaalVoeding * 1.06;
    // totaalkosten bakmiddelen printen
    var res = document.getElementById('totaalBakmiddel').innerHTML = $totaalVoeding.toFixed(2);
    var res = document.getElementById('totaalBakmiddelBTW').innerHTML = $totaalVoedingBTW.toFixed(2);

    // variablen bakblikken waarde ophalen
    $doosblik1 = (document.getElementById('doosblik1').value * 3);
    $doosblik2 = (document.getElementById('doosblik2').value * 6);
    $doosblik3 = (document.getElementById('doosblik3').value * 12);
    $doosblik4 = (document.getElementById('doosblik4').value * 15);
    $doosblik5 = (document.getElementById('doosblik5').value * 18);
    $doosblik6 = (document.getElementById('doosblik6').value * 21);
    $doosblik7 = (document.getElementById('doosblik7').value * 24);
    $doosblik8 = (document.getElementById('doosblik8').value * 27);
    $doosblik9 = (document.getElementById('doosblik9').value * 30);
    $doosblik10 = (document.getElementById('doosblik10').value * 33);
    $doosblik11 = (document.getElementById('doosblik11').value * 36);
    $doosblik12 = (document.getElementById('doosblik12').value * 39);
    
     // totaalkosten bakblikken bereken
    $resultaatDoosblik = +$doosblik1 + +$doosblik2 + +$doosblik3 + +$doosblik4 + +$doosblik5 +$doosblik6 +$doosblik7 +$doosblik8 +$doosblik9 +$doosblik10 +$doosblik11 +$doosblik12 ;
    var $omzetBTW = ($resultaatDoosblik * 1.06).toFixed(2);
    
    /*
    // resultaat bakblikken printen
    var res = document.getElementById('resultaatDoosblik').innerHTML = $resultaatDoosblik;
    var res = document.getElementById('resultaatDoosblikBTW').innerHTML = $omzetBTW;
    */
   
    //  variablen bakblikken waarde ophalen
    $springdoos1 = (document.getElementById('springdoos1').value * 3);
    $springdoos2 = (document.getElementById('springdoos2').value * 6);
    $springdoos3 = (document.getElementById('springdoos3').value * 12);
    $springdoos4 = (document.getElementById('springdoos4').value * 15);
    $springdoos5 = (document.getElementById('springdoos5').value * 18);
    $springdoos6 = (document.getElementById('springdoos6').value * 21);
    $springdoos7 = (document.getElementById('springdoos7').value * 24);
    $springdoos8 = (document.getElementById('springdoos8').value * 27);
     
    // totaalkosten bakblikken bereken
        $resultaatSpringdoos = +$springdoos1 + +$springdoos2 + +$springdoos3 + +$springdoos4 + +$springdoos5 +$springdoos6 +$springdoos7 +$springdoos8;
    var $omzetBTW = ($resultaatSpringdoos * 1.06).toFixed(2);

    /*
    // resultaat bakblikken printen
    var res = document.getElementById('resultaatSpringdoos').innerHTML = $resultaatSpringdoos;
    var res = document.getElementById('resultaatSpringdoosBTW').innerHTML = $omzetBTW;
    */
    
    // totaalkosten verpakkingsmiddelen berekenen
    var $totaalVoeding = $resultaatSpringdoos + $resultaatDoosblik;
    var $totaalVoedingBTW = $totaalVoeding * 1.06;
    // totaalkosten verpakkingsmiddelen printen
    var res = document.getElementById('totaalVerpakking').innerHTML = $totaalVoeding.toFixed(2);
    var res = document.getElementById('totaalVerpakkingBTW').innerHTML = $totaalVoedingBTW.toFixed(2);
}

function groet(){
    //aanmaken variablen
    var digitaal=new Date()
    var uren=digitaal.geturen()

    //if statements om te kijken hoe laat het is met een melding
    if (uren>=5&&uren<12) {
        var res = document.getElementById('groet').innerHTML = '<b>Goedemorgen bezoeker. Welkom op onze website.</b>'
    }
    else if (uren==12) {
        var res = document.getElementById('groet').innerHTML = '<b>Goedemiddag bezoeker Welkom op onze website.</b>'
    }
    else if (uren>=13&&uren<=17) {
        var res = document.getElementById('groet').innerHTML = '<b>Goedemiddag bezoeker Welkom op onze website.</b>'
    }
    else if (uren>=18&&uren<=23) {
        var res = document.getElementById('groet').innerHTML = '<b>Goedenavond bezoeker Welkom op onze website.</b>'
    }
    else if (uren>=24&&uren<=11) {
        var res = document.getElementById('groet').innerHTML = '<b>Goedenacht bezoeker Welkom op onze website.</b>'
    }
    else {
        var res = document.getElementById('groet').innerHTML = '<b>Goedenacht bezoeker Welkom op onze website.</b>'
    }

}

function verzenden(){
    alert('Uw bestelling is verzonden en wordt zo spoedig mogelijk geleverd.')
}