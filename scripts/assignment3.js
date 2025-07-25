function convertTemperature(){
    let temp = prompt("Enter temp:");
    let scale = prompt("Enter 'C' for Celcius or 'F' for Fahrenheit:");
    let result;
    if (scale ==="C"){
        result=(temp*9/5)+32;
        outputScale="°F"
    }else if(scale==="F"){
        result=(temp-32)*5/9;
        outputScale="°C"
    }else{
        result= "Invalid scale. Please us 'C' for Celcius and 'F' for Fahrenheit."
    }
    document.getElementById("temperature").innerHTML="The tempurature is: " + result + outputScale;
}