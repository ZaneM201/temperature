function convertToFahrenheit(){
    let celsius = prompt("Enter Celsius");
    document.getElementById("temp").innerHTML += `<li class ="item"> Fahrenheit: ${(celsius*9/5 )+32}</li>`; 
}