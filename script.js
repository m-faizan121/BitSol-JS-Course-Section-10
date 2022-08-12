'use strict';

//////////////////////////////////////// Functions 

// Default Parameters
const add = function(n1=0, n2=0) { // Default values 0 for both
    return n1 + n2;
}
console.log(add(5,10)); // 15 using Parameters
console.log(add()); // 0 using Default Values

// Pass by value & reference
// If we pass primitive types, it will be pass by value
// If we pass non-primitive types e.g objects, it will be pass by reference

// Pass By Value
const passByValue = function(arg){
    arg = 10;
}
let arg1 = 5;
console.log(arg1); // 5
passByValue(arg1);
console.log(arg1); // 5

// Pass By Reference
const passByReference = function(arg){
    arg.Name = "Faizee";
    arg.Age = 22;
}
let person = {
    "Name": "Faizan",
    "Age": 23,
};
console.log(person); // {Name: 'Faizan', Age: 23}
passByReference(person);
console.log(person); // {Name: 'Faizee', Age: 22}

// Higher order function - Function as an arg in another function
const isVowel = function(letter) { // Function to check whether letter is vowel or not
    return (letter === "A" || letter === "a" || letter === "E" || letter === "e" || letter === "I" || letter === "i" || letter === "O" || letter === "o" || letter === "U" || letter === "u");
}
const checkVowel = function(string, fn) {
    let flag = "";
    for(let i=0; i<string.length; i++)
    {
        if(fn(string[i])) // Using function passed as an argument
            flag = "Vowel";
        else
            flag = "Not Vowel";
        console.log(string[i] + " " + flag);
    }
}
checkVowel("Faizan", isVowel); 

// Arrow Functions
const pow = (n,exp) => n ** exp;
console.log(pow(2,3)); // 8
console.log(pow(10, 2)); // 100

// Higher order function - Functions returning Functions
const greet = function(msg) {
    return function(name){
        return msg + " " + name + "!";
    }
}
const fn = greet('Morning');
console.log(fn('Faizan')); // Morning Faizan!
console.log(greet('Hello')('Zeeshan')); // Hello Zeeshan!

// Functions returning Functions using Arrow Functions
const greet2 = msg => name => msg + " " + name + "!";
const fn2 = greet2('Morning');
console.log(fn2('Faizan')); // Morning Faizan!
console.log(greet2('Hello')('Zeeshan')); // Hello Zeeshan!

// Call, Apply & Bind Methods

// Use to tell (this) pointer to point which object
const Dell = {
    name: 'dell',
    price: 150000,
    show(market, country) {
        console.log(`This is ${this.name} laptopn with price of ${this.price} Rs in ${market} market ${country}`);
    }
};
const HP = {
    name: 'HP',
    price: 250000,
};
Dell.show(); // This is dell laptopn with price of 150000 Rs
const showLaptop = Dell.show;
// showLaptop(); // Undefined 
// because showLaptop is normal function and for it (this pointer) is undefined
// To solve this, we have to tell (this) explicitly using call and apply methods

// By using call
showLaptop.call(Dell, 'Dubai', 'Pakistan'); // This keyword inside show method will point to Dell
showLaptop.call(HP, 'Saddar', 'Pakistan'); // This keyword inside show method will point to HP

// By using apply
// Same like call but it recieve array of arguments, not individual
showLaptop.apply(Dell, ['Dubai', 'Pakistan']); // This keyword inside show method will point to Dell
showLaptop.apply(HP, ['Saddar', 'Pakistan']); // This keyword inside show method will point to HP

// By using bind
// It is mostly used within event listners and returns a new function
const Samsung = {
    name: "Samsung",
    os: "Android",
    price: 30000,

    display(){
        console.log(`${this.name} is an ${this.os} Phone having a price of Rs. ${this.price}`);
    }
};
const IPhone = {
    name: "IPhone",
    os: "IOS",
    price: 100000,
};
Samsung.display();
const display = Samsung.display;
const bindDisplay1 = display.bind(Samsung); // Bind always return new funtion
bindDisplay1(); // Samsung is an Android Phone having a price of Rs. 30000
const bindDisplay2 = display.bind(IPhone); // Bind always return new funtion
bindDisplay2(); // IPhone is an IOS Phone having a price of Rs. 100000

// Bind also use for default arguments
const calculateTax = function(price, percentage) {
    return (price * percentage) / 100;
}
const bindedTax = calculateTax.bind(null, 50); // Setting default args using bind
console.log(bindedTax(1000));
console.log(bindedTax(500));

// Intermediately Invoked Function (IIF)
// Use to call function only once immediately after definition
(function sum(n1, n2){
    console.log(n1 + n2);
})(5,5);

// Closures
// Function always has access to all variables of block in which that function is declared
const increment = function() {
    let num = 0;
    return function(){
        num++;
        return num;
    }
}
const incNum = increment(); // return function
console.log(incNum()); // 1
console.log(incNum()); // 2
console.log(incNum()); // 3
