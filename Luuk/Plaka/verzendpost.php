<?php
    
$input = $_POST['input'];
$wachtwoord = "wachtwoord"  
?>
<?php
  
    
                if($input == $wachtwoord)   {
                    header("Location: http://www.luukknippenberg.com/versie%201/index.php");
                    echo $input;
                    
                };
                   echo "Er is hier niks";
?>



<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title></title>
    </head>
    <body>
        <p>
            <!--header("Location: http://www.luukknippenberg.com/versie%201/index.php");-->
        </p>
    </body>
</html>
