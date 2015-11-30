<!DOCTYPE html>

<html>
    <head>
        <title>Contact</title>

<!--PhP pagina header gevoegd-->
<?php
    include('includes/header.php');
?>
        <div id="wrapper">
            <div id="content">
                <h1>CONTACT </h1>
                <p> 
                    <span class="bold">Bezoekadres:</span><br>
                    Wilhelminastraat 6, 1e etage, 5366 BD  Megen. <br>
                    We zijn open op afspraak.
                </p>
                <p> 
                    <span class="bold">Postadres:</span><br>
                    Kloosterstraat 9, 5366 BG Megen
                </p>
                <p> 
                    <span class="bold">Feedback</span><br>
                    Vind je een bug of werkt er iets niet? laat het ons weten!
                </p> 
                <p> 
                    <span class="bold">Wij zijn telefonisch te bereiken via:</span><br>
                    tel:+31(0) 412-123412<br>
                    mob: 06-12345678
                </p> 
                <p> 
                    Gebruik bij voorkeur onderstaand formulier:
                </p>       

                <form id="contact_form" action="mailto:gebruiker@tijdlijn.nl" method="POST" enctype="multipart/form-data">
	                <div class="row">
		                <label for="name">Uw naam:</label><br>
		                <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
	                </div>
	                <div class="row">
		                <label for="email">Uw e-mail:</label><br>
		                <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
	                </div>
	                <div class="row">
		                <label for="message">Uw bericht:</label><br>
		                <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
	                </div>
	                <input id="submit_button" type="submit" value="Verzend e-mail" />
                </form>	
            </div>
        </div>
    </body>
</html>