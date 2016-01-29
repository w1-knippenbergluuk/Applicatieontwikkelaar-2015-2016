function verzendInfo() {
//aanmaken variablen
    var $voornaam = document.getElementById('voornaam').value;
    var $achternaam = document.getElementById('achternaam').value;
	var $email = document.getElementById('email').value;
    var $straat = document.getElementById('straat').value;
    var $postcode = document.getElementById('postcode').value;
	var $woonplaats = document.getElementById('woonplaats').value;
    var $provincie = document.getElementById('provincie').value;
    var $iban = document.getElementById('iban').value;


    if (isNaN($voornaam) && isNaN($achternaam)){
        
    }   else{
        alert('Uw voor en/of achternaam kan geen cijfers bevatten');
        return false;
    }

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
  
	//var res = document.getElementById('resultaat');

}

function change() {
    // aanmaken variablen meel met kosten
    var $meel1 = document.getElementById('meel1').value * 2.50;
    var $meel2 = document.getElementById('meel2').value * 5;
    var $meel5 = document.getElementById('meel5').value * 10;
    var $meel10 = document.getElementById('meel10').value * 19;
    var $meel25 = document.getElementById('meel25').value * 30;

    // totaalkosten Meel bereken
    var $resultaatMeel = +$meel1 + +$meel2 + +$meel5 + +$meel10 + +$meel25;
    var $omzetBTW = ($resultaatMeel * 1.06).toFixed(2);

    // resultaat suiker printen
    var res = document.getElementById('resultaatMeel');
    res.innerHTML = 'De kosten van de meelproducten zonder btw = &euro;' + $resultaatMeel + '<br /> inclusief BTW = &euro;' + $omzetBTW;

    
    // aanmaken variablen gist met kosten
    var $gist1 = document.getElementById('gist1').value * 10;
    var $gist2 = document.getElementById('gist2').value * 20;
    var $gist3 = document.getElementById('gist3').value * 30;
    var $gist4 = document.getElementById('gist4').value * 40;
    var $gist5 = document.getElementById('gist5').value * 50;

     // totaalkosten Meel bereken
    var $resultaatGist = +$gist1 + +$gist2 + +$gist3 + +$gist4 + +$gist5;
    var $omzetBTW = ($resultaatGist * 1.06).toFixed(2);

    // resultaat gist printen
    var res = document.getElementById('resultaatGist').innerHTML = 'De kosten van de meelproducten zonder btw = &euro;' + $resultaatGist + '<br /> inclusief BTW = &euro;' + $omzetBTW;

     // aanmaken variablen suiker met kosten
    var $suiker1 = document.getElementById('suiker1').value * 1;
    var $suiker2 = document.getElementById('suiker2').value * 2;
    var $suiker3 = document.getElementById('suiker3').value * 3;
    var $suiker4 = document.getElementById('suiker4').value * 4;
    var $suiker5 = document.getElementById('suiker5').value * 5;

     // totaalkosten suiker bereken
    var $resultaatSuiker = +$suiker1 + +$suiker2 + +$suiker3 + +$suiker4 + +$suiker5;
    var $omzetBTW = ($resultaatSuiker * 1.06).toFixed(2);

    // resultaat suiker printen
    var res = document.getElementById('resultaatSuiker').innerHTML = 'De kosten van de meelproducten zonder btw = &euro;' + $resultaatSuiker + '<br /> inclusief BTW = &euro;' + $omzetBTW;

    // aanmaken variablen bakblikken met kosten
    var $bakblik1 = document.getElementById('bakblik1').value * 1;
    var $bakblik2 = document.getElementById('bakblik2').value * 2;
    var $bakblik3 = document.getElementById('bakblik3').value * 3;
    var $bakblik4 = document.getElementById('bakblik4').value * 4;
    var $bakblik5 = document.getElementById('bakblik5').value * 5;
    var $bakblik6 = document.getElementById('bakblik6').value * 6;
    var $bakblik7 = document.getElementById('bakblik7').value * 7;
    var $bakblik8 = document.getElementById('bakblik8').value * 8;
    var $bakblik9 = document.getElementById('bakblik9').value * 9;
    var $bakblik10 = document.getElementById('bakblik10').value * 10;
    var $bakblik11 = document.getElementById('bakblik11').value * 11;
    var $bakblik12 = document.getElementById('bakblik12').value * 12;

     // totaalkosten bakblikken bereken
    var $resultaatBakblik = +$bakblik1 + +$bakblik2 + +$bakblik3 + +$bakblik4 + +$bakblik5 +$bakblik6 +$bakblik7 +$bakblik8 +$bakblik9 +$bakblik10 +$bakblik11 +$bakblik12 ;
    var $omzetBTW = ($resultaatBakblik * 1.06).toFixed(2);
    
    // resultaat bakblikken printen
    var res = document.getElementById('resultaatBakblik').innerHTML = 'De kosten van de meelproducten zonder btw = &euro;' + $resultaatBakblik + '<br /> inclusief BTW = &euro;' + $omzetBTW;

    // aanmaken variablen springvormen met kosten
    var $spring1 = document.getElementById('spring1').value * 5;
    var $spring2 = document.getElementById('spring2').value * 10;
    var $spring3 = document.getElementById('spring3').value * 15;
    var $spring4 = document.getElementById('spring4').value * 20;
    var $spring5 = document.getElementById('spring5').value * 25;
    var $spring6 = document.getElementById('spring6').value * 30;
    var $spring7 = document.getElementById('spring7').value * 35;
    var $spring8 = document.getElementById('spring8').value * 40;
   
     // totaalkosten springvormen bereken
    var $resultaatSpring = +$spring1 + +$spring2 + +$spring3 + +$spring4 + +$spring5 +$spring6 +$spring7 +$spring8;
    var $omzetBTW = ($resultaatSpring * 1.06).toFixed(2);

    // resultaat springvormen printen
    var res = document.getElementById('resultaatSpring').innerHTML = 'De kosten van de meelproducten zonder btw = &euro;' + $resultaatSpring + '<br /> inclusief BTW = &euro;' + $omzetBTW;

    // aanmaken variablen bakblikken met kosten
    var $doosblik1 = document.getElementById('doosblik1').value * 3;
    var $doosblik2 = document.getElementById('doosblik2').value * 6;
    var $doosblik3 = document.getElementById('doosblik3').value * 12;
    var $doosblik4 = document.getElementById('doosblik4').value * 15;
    var $doosblik5 = document.getElementById('doosblik5').value * 18;
    var $doosblik6 = document.getElementById('doosblik6').value * 21;
    var $doosblik7 = document.getElementById('doosblik7').value * 24;
    var $doosblik8 = document.getElementById('doosblik8').value * 27;
    var $doosblik9 = document.getElementById('doosblik9').value * 30;
    var $doosblik10 = document.getElementById('doosblik10').value * 33;
    var $doosblik11 = document.getElementById('doosblik11').value * 36;
    var $doosblik12 = document.getElementById('doosblik12').value * 39;

     // totaalkosten bakblikken bereken
    var $resultaatDoosblik = +$doosblik1 + +$doosblik2 + +$doosblik3 + +$doosblik4 + +$doosblik5 +$doosblik6 +$doosblik7 +$doosblik8 +$doosblik9 +$doosblik10 +$doosblik11 +$doosblik12 ;
    var $omzetBTW = ($resultaatDoosblik * 1.06).toFixed(2);
    
    // resultaat bakblikken printen
    var res = document.getElementById('resultaatDoosblik').innerHTML = 'De kosten van de meelproducten zonder btw = &euro;' + $resultaatDoosblik + '<br /> inclusief BTW = &euro;' + $omzetBTW;

    // aanmaken variablen bakblikken met kosten
    var $springdoos1 = document.getElementById('springdoos1').value * 3;
    var $springdoos2 = document.getElementById('springdoos2').value * 6;
    var $springdoos3 = document.getElementById('springdoos3').value * 12;
    var $springdoos4 = document.getElementById('springdoos4').value * 15;
    var $springdoos5 = document.getElementById('springdoos5').value * 18;
    var $springdoos6 = document.getElementById('springdoos6').value * 21;
    var $springdoos7 = document.getElementById('springdoos7').value * 24;
    var $springdoos8 = document.getElementById('springdoos8').value * 27;

    // totaalkosten bakblikken bereken
    var $resultaatSpringdoos = +$springdoos1 + +$springdoos2 + +$springdoos3 + +$springdoos4 + +$springdoos5 +$springdoos6 +$springdoos7 +$springdoos8;
    var $omzetBTW = ($resultaatSpringdoos * 1.06).toFixed(2);

    // resultaat bakblikken printen
    var res = document.getElementById('resultaatSpringdoos').innerHTML = 'De kosten van de meelproducten zonder btw = &euro;' + $resultaatSpringdoos + '<br /> inclusief BTW = &euro;' + $omzetBTW;
}