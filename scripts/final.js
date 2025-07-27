console.log("Temerature Dashboard");
let p = document.getElementById("result");
function celsiusToFahrenheit(){
    let c = prompt("Enter Celsius:");
    p.innerHTML += `${c} °C = ${(c*9/5)+32} °F`;
}
function fahrenheitToCelsius(){
    let f = prompt("Enter Fahrenheit:");
    p.innerHTML += `${f} °F = ${(f-32)*5/9} °C`;
}



function generateTable(){
    let tbody = document.getElementById("tempTable");
    for(let c=0; c<=100; c+=10){
        let f = (c*9/5)+32
        tbody.innerHTML += `<tr>
            <td> ${c} </td>
            <td> ${f} </td>
        </tr>`
    }
}