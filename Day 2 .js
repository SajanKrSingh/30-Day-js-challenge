// Activity 1: Arithmetic Operations
console.log("Activity 1: Arithmetic Operations");
let num1 = 10 , num2=5;
console.log(`Sum: ${ num1 + num2 }`);
console.log(`Difference : ${ num1 - num2 }`);
console.log(`Multiple : ${ num1 * num2 }`);
console.log(`Division : ${ num1 / num2 }`);
console.log(`remainder : ${ num1 % num2 }`);

// Activity 2: Assignment Operators
console.log("Activity 2: Assignment Operators");
let x = 10;
console.log(`Value of X : ${x}`);
x  += 8;
console.log(`New Value of X (x+=8) : ${x}`);
x-=5;
console.log(`New Value of X (x-=5) : ${x}`);
console.log(`New Value of X (x*=4) : ${x*=4}`);
console.log(`New Value of X (x/=2) : ${x/=2}`);
console.log(`New Value of X (x%=4) : ${x%=4}`);

// Activity 3: Comparison Operators
console.log("Activity 3: Comparison Operators");

console.log(`10 > 5 (greaterthan): ${num1 > num2}`);
console.log(`10 < 5 (lessthan): ${num1 < num2}`);
console.log(`10 >= 5 (Greaterthan or equal): ${num1 >= num2}`);
console.log(`10 <= 5 (lessthan or equal ): ${num1 <= num2}`);

let a = 5, b="5";
console.log(`EqualTo (5 == '5'): ${a==b}`); 
console.log(`StrictEqualTo (5 === '5'): ${a===b}`); 

//Activity 4: Logical Operators
console.log("Activity 4: Logical Operators");
console.log(`Logical And Operators :  (5 > 3) && (8 < 10): ${(5 > 3) && (8 < 10)}`); //Both are ture -- true otherwise false 
console.log(`Logical OR Operators :  (5 > 8) || (8 < 10): ${(5 > 8) || (8 < 10)}`); // Anyone ture-- true 
console.log(`Logical NOT Operators : ! (5 > 8): ${! (5 > 8)}`); // reverse if true--- false 

// Activity 5: Ternary Operator
console.log("Activity 5: Ternary Operator");
let number = 10;
let isPositive = number >= 0 ? 'Positive' : 'Negative';
console.log(`${number} is ${isPositive} Number`);