
<?php
    include('includes/head.php');
?>
        
            <div id="content">
                <h1>CONTACT </h1>
                <p> 
                    <span class="bold">Bezoekadres:</span><br />
                    PLAKA ateliers<br />
                    1ste etage<br />
                    Wilhelminastraat 6<br />
                    5366 BD MEGEN<br />
                    info@plaka-kunst.nl<br /><br />
                    U kunt de ateliers op afspraak bezoeken.
                </p>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.081710859652!2d5.563233116007724!3d51.82293779540357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6fe613953bfb5%3A0x5105cb9d06be282!2sWilhelminastraat+6%2C+5366+BD+Megen!5e0!3m2!1snl!2snl!4v1448563474244" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                <!--
                <p> 
                    <span class="bold">Postadres:</span><br />
                    Kloosterstraat 9, 5366 BG Megen
                </p>
                -->
                <p> 
                    <span class="bold">U kunt:</span><br />
                    vrijblijvend een afspraak maken met één of meerdere kunstenaars voor hun werk en/of bezoek aan hun ateliers. <br />    
                    zich inschrijven voor deelname aan een filosofisch symposium.           <br /> 
                    informatie opvragen betreffende mogelijkheden voor gastkunstenaars. 

                </p> 
                <!--
                <p> 
                    <span class="bold">Wij zijn telefonisch te bereiken via:</span><br />
                    tel:+31(0) 412-462127<br />
                    mob: 06-29436202
                </p> 
                -->
                <p> 
                    <!--
                    Gebruik bij voorkeur onderstaand formulier:
                    -->
                    Gebruik onderstaand formulier:
                </p>       

                <form id="contact_form" action="MAILTO:info@plaka-kunst.nl" method="POST" enctype="multipart/form-data">
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
