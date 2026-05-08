// alert("working")
// document.getElementById("enterCelsius").value = celsius;
// let celsius = parseFloat(document.getElementById("enterCelsius").value);
// let fahrenheit = parseFloat(document.getElementById("enterFahrenheit").value);
// let kilometers = parseFloat(document.getElementById("enterKilometers").value);
// let miles = parseFloat(document.getElementById("enterMiles").value);

const convertCelsius = () => {
    celsius = parseFloat(document.getElementById("enterCelsius").value);
    fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("enterFahrenheit").value = fahrenheit;
    console.log(fahrenheit);
}
const convertFahrenheit = () => {
    fahrenheit = parseFloat(document.getElementById("enterFahrenheit").value);
    celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("enterCelsius").value = celsius;
    console.log(celsius);
}

const convertKilometers = () => {
    kilometers = parseFloat(document.getElementById("enterKilometers").value);
    miles = kilometers * 0.621371;
    document.getElementById("enterMiles").value = miles;
    console.log(miles);
}