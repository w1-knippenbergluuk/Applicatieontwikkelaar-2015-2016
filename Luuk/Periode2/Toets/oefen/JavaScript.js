var getal = 0;

function buttonClick() {

    if (getal > 8){
        document.getElementById("vlak").style.visibility = "hidden";
        alert('10 keer!!!!!')
    } else{
        
        getal++
        alert(getal);
    }

    
}

