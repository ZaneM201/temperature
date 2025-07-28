console.log("Temerature Dashboard");
let p = document.getElementById("result");
function clearResults(){
    p.innerHTML="";
}
function celsiusToFahrenheit(){
    let c = prompt("Enter Celsius:");
    p.innerHTML += `${c} °C = ${(c*9/5)+32} °F`;
    let thermometer = document.getElementById("thermo");
    for(let i=0; i<10; i++){
        let level = document.createElement("div");
        level.classList.add("level");
        if(i<3, c<11){
            level.style.backgroundColor = "blue";
        }else if(i<7, c<26){
            level.style.backgroundColor = "orange";
        }else{
            level.style.backgroundColor = "red";
        }
        thermometer.appendChild(level);
    }
}
function fahrenheitToCelsius(){
    let f = prompt("Enter Fahrenheit:");
    p.innerHTML += `${f} °F = ${(f-32)*5/9} °C`;
    
}
/* Function fillThermo(c){
    let thermo = document.getElementById("thermo");
    for(let c=0; c<10; c++){
        let level = document.createElement("div");
        level.classList.add("level");
        if(c<=3){
           level.style.backgroundColor = "blue";
        }else if(c<=7){
            level.style.backgroundColor = "orange";
        }else{
            level.style.backgroundColor = "red";
        }
        thermo.appendChild(level);
    }
} */
let tbody = document.getElementById("tempTable");
function clearTable(){
    tbody.innerHTML="";
}
function generateTable(){
    for(let c=0; c<=100; c+=10){
        let f = (c*9/5)+32
        tbody.innerHTML += `<tr>
            <td> ${c} </td>
            <td> ${f} </td>
        </tr>`;
    }
}