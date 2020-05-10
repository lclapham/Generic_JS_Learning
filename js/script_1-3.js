const age = 30;

if(true){
    const age = 40;  // This is local scope
    const name = "Lamar";
    console.log('inside code block: ', age, name);
    if(true) {
        const age = 50;
        console.log('inside 2nd code block', age)
        var test = "hello";
    }
}

console.log('outside code block: ', age, name, test);

// NOTE: let and const maintain block scope, var does not.

// Functions

// Fucntion declaration
function greet() {
    console.log("Hello");
}


// Function Expression

// const speak = function () {
//     console.log("Speak");
// };


// Passing a value into a function

// const speak = function (name = 'person', time = 'morning') {  // with some defaults
//     console.log(`Good ${time} ${name}`);
// };

// speak('Lamar', 'morning')

// returning values

// const calcArea = function(radius){
//     return  3.14 * radius**2;
//     }
// const area = calcArea(5);
// console.log(area);


// Arrow functions

// const calcArea = (radius) => {
//     return  3.14 * radius**2;
// }
// const area = calcArea(5);
// console.log(area);

// const greek = () => 'hello I am in here';
// const results = greek();
// console.log(results);

// const bill = (products, tax) => {
//     //do something
// }