 function validateInput() {
    var x = document.getElementById('graden').value;
    if (x == null || x == "") {
        alert("Je moet wel iets invullen");
        return false;
    }   else{
        graadsoortDetect();
    }
}
 
 function graadsoortDetect(){
    var select = document.getElementById('graadsoortDetect').value;
    if (select == "celsius") {
          celsiusOmzet();
    } else{
        if (select == "fahrenheit") {
            fahrenheitOmzet();
        } else{
            if (select == "kelvin"){
                kelvinOmzet();
            } else{
                if (select == "rankine"){
                    rankineOmzet();
                }
            }
        }
    }
}

function celsiusOmzet()    {
    var select = document.getElementById('graadsoortOmzet').value;

    var x = document.getElementById('graden').value;
    var input = parseInt(x);

    var result = parseInt(0);
    
    if (select == "fahrenheit"){
        result = input * 1.8 + 32;
    } else {
        if (select == "kelvin"){
            result = input + 273.15;
        }   else{
            if (select == "rankine"){
                result = (input + 273.150) * 9 / 5;
            }   else{
                if (select == "celsius"){
                    alert('Celsius naar Celsius is een beetje onlogisch');
                    return;
                }
            }
        }
    }
    document.getElementById('resultaat').innerHTML = input + ' graden celsius = ' + result + ' graden ' + select;
}

function fahrenheitOmzet()    {
    var select = document.getElementById('graadsoortOmzet').value;

    var x = document.getElementById('graden').value;
    var input = parseInt(x);

    var result = parseInt(0);

    if (select == "fahrenheit"){
        alert('Fahrenheit naar Fahrenheit is een beetje onlogisch');
        return;
    } else {
        if (select == "kelvin"){
            result = (input + 459.67) * 5 / 9;
        }   else{
            if (select == "rankine"){
                result = input + 459.67;
            }   else{
                if (select == "celsius"){
                    result = (input - 32) * 5 / 9;
                }
            }
        }
    }
    document.getElementById('resultaat').innerHTML = input + ' graden fahrenheit = ' + result + ' graden ' + select;
}

function kelvinOmzet()    {
    var select = document.getElementById('graadsoortOmzet').value;

    var x = document.getElementById('graden').value;
    var input = parseInt(x);

    var result = parseInt(0);

    if (select == "fahrenheit"){
        result = input * 9 / 5 - 459.67;
    } else {
        if (select == "kelvin"){
            alert('Kelvin naar Kelvin is een beetje onlogisch');
            return;
        }   else{
            if (select == "rankine"){
                result = input * 9 / 5;
            }   else{
                if (select == "celsius"){
                    result = input - 273.15;
                }
            }
        }
    }
    document.getElementById('resultaat').innerHTML = input + ' graden kelvin = ' + result + ' graden ' + select;
}

function rankineOmzet()    {
    var select = document.getElementById('graadsoortOmzet').value;

    var x = document.getElementById('graden').value;
    var input = parseInt(x);

    var result = parseInt(0);

    if (select == "fahrenheit"){
        result = input - 459.67;
    } else {
        if (select == "kelvin"){
            result = input * 5 / 9;
        }   else{
            if (select == "rankine"){
                alert('Rankine naar Rankine is een beetje onlogisch');
                return;
            }   else{
                if (select == "celsius"){
                    result = (input - 491.67) * 5 / 9;
                }
            }
        }
    }
    document.getElementById('resultaat').innerHTML = input + ' graden rankine = ' + result + ' graden ' + select;
}