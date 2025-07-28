console.log("Temerature Dashboard");
let p = document.getElementById("result");
function clearResults(){
    p.innerHTML="";
}
function celsiusToFahrenheit(){
    let c = prompt("Enter Celsius:");
    p.innerHTML += `${c} °C = ${(c*9/5)+32} °F`;
    let thermometer = document.getElementById("thermo");
    let fillLevel=Math.round((c/100)*10)
    for(let i=0; i<10; i++){
        let level = document.createElement("div");
        level.classList.add("level");
        if (i<fillLevel){
            if (c<11){
                level.style.backgroundColor = "blue";
            }else if(c<26){
                level.style.backgroundColor = "orange";
            }else{
                level.style.backgroundColor = "red";
            }
        }else{
            level.style.backgroundColor = "#dedede"; 
        }
        thermometer.appendChild(level);
    }
}
function fahrenheitToCelsius(){
    let f = prompt("Enter Fahrenheit:");
    let c = (f-32)*5/9;
    p.innerHTML += `${f} °F = ${c.toFixed(1)} °C`;
    let thermometer = document.getElementById("thermo");
    let fillLevel=Math.round((c/100)*10)
    for(let i=0; i<10; i++){
        let level = document.createElement("div");
        level.classList.add("level");
        if (i<fillLevel){
            if(c<11){
                level.style.backgroundColor = "blue";
            }else if(c<26){
                level.style.backgroundColor = "orange";
            }else{
                level.style.backgroundColor = "red";
            }
        }else{
            level.style.backgroundColor = "#dedede"; 
        }
        thermometer.appendChild(level);
    }
}
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