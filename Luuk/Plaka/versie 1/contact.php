
<?php
    include('includes/head.php');
?>
        
            <div id="content">
                <h1>Contact </h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                     Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                     Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                     Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                     In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                     Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                     Aenean vulputate eleifend tellus.
                     Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                     Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                     Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
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
