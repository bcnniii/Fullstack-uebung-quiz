// Define variables
let zahl1 = 5;
let zahl2 = 10;

// Output calculation results
console.log(zahl1 + zahl2);
console.log(zahl1 - zahl2);
console.log(zahl1 * zahl2);
console.log(zahl1 / zahl2);

// These three mathematical operations mean exactly the same
zahl1 = zahl1 + 1;
zahl1++;
zahl1 += 1;

// Some comparisons that return either true or false
console.log(5 == '5');
console.log(5 === '5');
console.log(5 != 5);
console.log(5 <= 5);
console.log(5 > 5);

// Use && to connect two conditions as AND condition
console.log("Alpha" < "Beta" && "Beta" < "Gamma");
// Use || to connect two conditions as OR condition
console.log("Alpha" < "Beta" || "Beta" < "Gamma");

// Defining a function with input and output paramters
function functionName(zahl1, zahl2) {
    let result = zahl1 + zahl2;
    return result;
}

// Calling a function
console.log(functionName(5, 5));
let ergebnis = functionName(3, 8);
console.log(ergebnis);

// Adding two Strings together ("Concatenate")
let firstName = "Benjamin";
let lastName = "Mai";
let fullName = firstName + " " + lastName;
console.log(fullName);

// This will output "NaN" which means Not a Number, as you can't substract Strings
console.log(firstName - lastName);

// Defining a const variable
const zahl = 5;
console.log(zahl);

// Doing this leads to an error as you can't assign a new value to a const variable
zahl = 10;
console.log(zahl);

// 
// Exercises (Results of them)
// 
console.log(typeof zahl);
let number = 26.67; //Number 
let text = "JS ist Müll"; //String 
let bestanden = true; //boolean 

console.log(number);
console.log(text);
console.log(bestanden);

number = 42;
text = "Irgendein Text.";
bestanden = false;
//Variablen neue Werte zuweisen

console.log(number);
console.log(text);
console.log(bestanden);
//Werte der Variablen ausgeben

let neueVariable = text;
console.log(neueVariable);

let abc ;
console.log(abc);


