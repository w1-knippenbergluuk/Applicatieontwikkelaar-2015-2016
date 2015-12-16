function celsiusToFahrenheit(){
    var x = prompt('Hoeveel graden Celsius?');
    var celsius = parseInt(x);
    var fahrenheit = celsius * 1.8 + 32;
    document.getElementById('resultaat').innerHTML = celsius + ' graden Celsius = ' + fahrenheit + ' graden Fahrenheit';
}

function fahrenheitToCelsius() {
    var x = prompt('Hoeveel graden Fahrenheit?');
    var fahrenheit = parseInt(x);
    var celsius = fahrenheit - 32 / 1.8;
    document.getElementById('resultaat').innerHTML = fahrenheit + ' graden Fahrenheit = ' + celsius + ' graden Celsius';
}

function celsiusToKelvin() {
    var x = prompt('Hoeveel graden Celsius?');
    var celsius = parseInt(x);
    var kelvin = celsius + 273.15;
    document.getElementById('resultaat').innerHTML = celsius + ' graden Celsius = ' + kelvin + ' graden Kelvin';
}

function rankineToCelsius() {
    var x = prompt('Hoeveel graden Rankine?');
    var rankine = parseInt(x);
    var celsius = (rankine - 491.67) * 5 / 9;
    document.getElementById('resultaat').innerHTML = rankine + ' graden Rankine = ' + celsius + ' graden Celsius';
}

function celsiusToRankine() {
    var x = prompt('Hoeveel graden Celsius?');
    var celsius = parseInt(x);
    var rankine = (celsius + 273.15) * 9 / 5;
    document.getElementById('resultaat').innerHTML = celsius + ' graden Celsius = ' + rankine + ' graden Rankine';
}

function rankineToKelvin() {
    var x = prompt('Hoeveel graden Rankine?');
    var rankine = parseInt(x);
    var kelvin = rankine * 5 / 9;
    document.getElementById('resultaat').innerHTML = rankine + ' graden Rankine = ' + kelvin + ' graden Kelvin';
}

function kelvinToRankine() {
    var x = prompt('Hoeveel graden Kelvin?');
    var kelvin = parseInt(x);
    var rankine = kelvin * 9 / 5;
    document.getElementById('resultaat').innerHTML = kelvin + ' graden Kelvin = ' + rankine + ' graden Rankine';
}