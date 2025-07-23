console.log("functions.js");

//1. function declaration (creating the function)
function sayHello(){
    //body of the cn
    console.log("Hello World");
}

//.2 call/run/execute/trigger the function (code, console, user)
sayHello();

//example 2 w/ 2 parameters
function greet(name, name2="Someone"){
    console.log("Hello " + name + " and " + name2);
}

greet("Reggie");
greet("Elliot", "Mike");

function doubleNumber(num){
    let total = num*2;
    console.log(total);
}

doubleNumber(2);
doubleNumber(3);
doubleNumber(8);

//example 2, w/ promt

function welcome(){
    let name = prompt("Enter your Name:");
    let age = prompt("Enter your Age:");
    console.log("Welcome " + name + " Your age is " + age);
}

//example 3, w/ default parameters

function add(num1=0, num2=0){
    let total = num1 + num2;
    console.log(`The total is: ${num1+num2}`);
}

add(5,5);
add(9,4);
add(12,34);
add()

function combineNames(firstName = "Unkown", lastName = "Unkown"){
    console.log(`${firstName} ${lastName}`);
}

combineNames("Alice", "Johnson");
combineNames("Alice");
combineNames();

function convertToSeconds(){
    let minutes = prompt("Enter minutes");
    document.getElementById("result").innerHTML += `<li class ="item"> The conversion is: ${60*minutes}</li>`;
}