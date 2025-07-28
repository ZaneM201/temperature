console.log("Loops");
// new activity 1

const num = 8;
let result = 0;
document.write(`<h2>Table of ${num} </h2>`);
for(let i=0; i<=10; i++){
    result = num*i;
    document.write(`<p>${num} x ${i} = ${result}</p>`);
}

// FOR LOOPS
// for(start_point; condition; interval)
for(let i=0; i<4; i++){
    document.write("My for is working? " + i);
}

for(let i=1; i<=10; i++){
    document.write(`<p>${i}</p>`);
}
document.write("<h2>Activity 4</h2>");
for(let i=2; i<21; i+=2){
    document.write(`<p>${i}</p>`);
}

// WHILE LOOP
let i = 0; // start point
while(i<=10){ // stop condition
    console.log(i);
    i++; // increment
}

// DO-WHILE LOOP
let j = 10; // start point
do{
    console.log(j);
    j++ // incriment
}while(j<5) // stop condition

function fillThermo(){
    let thermometer = document.getElementById("thermometer");
    for(let i=0; i<10; i++){
        let level = document.createElement("div");
        level.classList.add("level");
        if(i<3){
            level.style.backgroundColor = "blue";
        }else if(i<7){
            level.style.backgroundColor = "orange";
        }else{
            level.style.backgroundColor = "red";
        }
        thermometer.appendChild(level);
    }
}
function generateTable(){
    let tbody = document.getElementById("tempTable");
    for(let c=0; c<100; c+=10){
        let f = (c*9/5)+32
        tbody.innerHTML += `<tr>
            <td> ${c} </td>
            <td> ${f} </td>
        </tr>`
    }
}
generateTable()