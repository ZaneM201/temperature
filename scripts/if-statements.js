console.log("Conditionals")

// if-statements (conditon = y/n?)
// if(conditon){
//     code to be executed if the condition is true
// }

if(3<5){
    console.log("This is true");
}

let student1 = 45
let student2 = 45

if(student1 == student2){
    console.log("The values are the same");
}

// Case 1: 5 == 5 -> true
// Case 2: 5 == "5" -> true because == compares the values
// Case 3: 5 === "5" -> false because === compares the value and datatype

// if-else statement
// if-statements (conditon = y/n?)
// if(conditon){
//     code to be executed if the condition is true
// }else{
//    code to be executed if the condition is false
// }    

let waterTemp = 102;

if(waterTemp >= 100){
    console.log("The water is boiling");
}else{
    console.log("The water is NOT boiling");
}


let age = 32;

if(age >= 21){
    console.log("You are an Adult.");
}else{
    console.log("You are Underage.");
}

// else-if statement
// if(condition1){
//   code to be executed the condition1 is true
// }else if(condition2){
//   code to be executed if the condition2 is true
// }else{
//   code to be executed if the conditions were false
// }

function ageCalculator(){
    let age = prompt("Enter the age:");
    if(age<13){
        console.log("You are a child.");
    }else if(age<21){
        console.log("You are a teenager.");
    }else if(age<64){
        console.log("You are an adult.");
    }else{
        console.log("You are a senior.");
    }
}

// Challenge 2

function traffic(){
    let light = prompt("Enter a color:");
    if(light == "green"){
        console.log("Go!");
    }else if(light == "yellow"){
        console.log("Slow down!");
    }else if(light == "red"){
        console.log("Stop!");
    }else{
        console.error("Invlid color!");
    }  
}

// Challeng 3

function ticketCalculator(){
    let age1 = prompt("Enter your Age:");
    let price = 0;
    if(age1<12){
        price=5;
    }else if(age1<18){
        price=8;
    }else{
        price=10;
    }
    document.getElementById("results").innerHTML="Your price is $" + price;
}

// Challenge 4

function weatherOutfit(){
    let temp = prompt("Enter the temperature in C:");
    let fit = "";
    let p = document.getElementById("results");
    if(temp<15){
        fit = "Jacket";
    }else if(temp<25){
        fit = "Sweater";
    }else{
        fit = "T-shirt";
    }
    p.innerHTML="You should wear: " + fit;    
}

// Switcc-case
// use it for checking on single variable or expression

let action = prompt("Choose an acton: jump, run, attack, or defense");

switch(action){
    case "jump":
        console.log("You jumped over an obj");
        break;
    case "run":
        console.log("You are Running");
        break;
    case "attack":
        console.log("You are attacking the enemy");
        break;
    case "defense":
        console.log("You blocked an attack");
        break;
    default:
        console.log("Unknown action, try again");    
}