/*
arrow function, assign to const
 */
const greeter = (name: string) => console.log(`Hello, ${name}!`);
greeter('Ivan');

/*
object with data type
 */
const obj: { [key: string]: string } = {};
obj.prop1 = 'test';
obj.prop2 = 'test2'; // prop name should be either string or number; in this case - string
console.log(obj);

/*
bad object structure, w/e
return from object by key, like in Python
can use return [...data][key] too
 */
function returnFromArray(id: number) {
    const defValues = ['one', 'two', 'three'];
    if (!(id in defValues)) {
        throw new Error('not found');
    }
    return defValues[id];
}

console.log(returnFromArray(2));

/*
arrow functions, ternary operator
 */
let factorial = function fac(n: number): number {
    return n < 2 ? 1 : n * fac(n - 1);
};
// TODO input checking
console.log(factorial(5));

/*
spread operator, array data type
 */
function myConcat(separator: string, ...args: string[]) {
    let result = ''; // initialize list
    let i;
    // iterate through arguments
    for (i = 0; i < args.length; i++) {
        result += args[i] + separator;
    }
    console.log(result);
    return result;
}

myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

/*
arrow function, map(), spread operator
 */
function multiply(multiplier: number, ...theArgs: number[]) {
    return theArgs.map(x => multiplier * x);
}

console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
const multiply2 = (multiplier: number, ...args: number[]) => args.map(arg => multiplier * arg);
console.log(multiply2(3, 1, 2, 3, 4));

/*
Destructive assignment
 */
let a;
let b;
let rest;
[a, b] = [10, 20];
console.log(a);
// expected output: 10
console.log(b);
// expected output: 20
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // expected output: [30,40,50]

/*
ternary (condition) operator
 */
const age = 10;
const status2 = (age >= 18) ? 'adult' : 'minor';
console.log(status2);
