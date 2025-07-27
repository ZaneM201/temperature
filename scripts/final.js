console.log("Temerature Dashboard");
let p = document.getElementById("temp");
function celsiusToFahrenheit(){
    let c = prompt("Enter Celsius:");
    p.innerHTML += `${c} °C = ${(c*9/5)+32} °F`;
}
function fahrenheitToCelsius(){
    let f = prompt("Enter Fahrenheit:");
    p.innerHTML += `${f} °F = ${(f-32)*5/9} °C`;
}