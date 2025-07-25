function convertToFahrenheit(){
    let celsius = prompt("Enter Celsius:");
    document.getElementById("temp").innerHTML += `<li class ="item"> The conversion of Celsius ${celsius}" to Fahrenhiet is ${(celsius*9/5)+32}"</li>`; 
}