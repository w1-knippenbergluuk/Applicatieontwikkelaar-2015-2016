function bereken(){
    var getalElement = document.getElementById('input');
    var input = getalElement.value;
    
    if(input == "test"){
        alert('test');
        window.location.href = 'versie 1/index.php';
    }   else    {
        
            alert('Wachtwoord onjuist!');
         
    }
}