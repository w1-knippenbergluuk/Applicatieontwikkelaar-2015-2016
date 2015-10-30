
<?php
    include('includes/head.php');
?>
        
            <div id="content">
                <h1>Contact </h1>
                <p> 
                    <span class="bold">Bezoekadres:</span><br />
                    Wilhelminastraat 6, 1e etage, 5366 BD  Megen. <br />
                    We zijn open op afspraak.
                </p>
                <p> 
                    <span class="bold">Postadres:</span><br />
                    Kloosterstraat 9, 5366 BG Megen
                </p>
                <p> 
                    <span class="bold">U kunt:</span><br />
                    Informatie opvragen betreffende mogelijkheden voor gastkunstenaars. Reserveren voor activiteiten en lezingen.
                     Teambuilding voor bedrijven, rondleidingen al dan niet in combinatie met andere faciliteiten in Megen.
                     U kunt  vrijblijvend een afspraak maken met één of meerdere kunstenaars voor hun werk en/of  bezoek aan hun ateliers.
                </p> 
                <p> 
                    <span class="bold">Wij zijn telefonisch te bereiken via:</span><br />
                    tel:+31(0) 412-462127<br />
                    mob: 06-29436202
                </p> 
                <p> 
                    Gebruik bij voorkeur onderstaand formulier:
                </p>       

                <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
	                <div class="row">
		                <label for="name">Uw naam:</label><br />
		                <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
	                </div>
	                <div class="row">
		                <label for="email">Uw e-mail:</label><br />
		                <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
	                </div>
	                <div class="row">
		                <label for="message">Uw bericht:</label><br />
		                <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
	                </div>
	                <input id="submit_button" type="submit" value="Verzend e-mail" />
                </form>	
            </div>
<?php
    include('includes/footer.php');
?>
