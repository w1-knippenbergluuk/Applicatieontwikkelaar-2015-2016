<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title></title>
        <link href="style.css" rel="stylesheet">
	    <script src="javascript/javascript.js" type="text/javascript"></script>
    </head>
    <body>
        <!--
        <form>
            <input id="input" name="input" size="3" type="text" value="0" maxlength="10" autocomplete="off">
        </form>
        <div id="voortgang">
        </div>
        <div id="buttonDiv">
            <button name="bereken" type="button" id="button" onclick="bereken();">Bereken</button>
        </div>
        -->
        <form method='post' action='verzendpost.php'>
            <label>Wachtwoord: </label><input name='input' type='text' value='' autocomplete="off">
            <input type='submit' value='verzend' name='verzend'>
         </form>
    </body>
</html>