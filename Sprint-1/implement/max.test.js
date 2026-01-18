/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test("Empty Array", () => {
    const list=[];
    expect(findMax(list)).toEqual(-Infinity);
})

// Given an array with one number
// When passed to the max function
// Then it should return that number
test('One number element array', () => {
    const list = [1];
    expect(findMax(list)).toEqual(list[0]);
})

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test('Largest Number in the array', ()=> {
    const list = [30, 50, 10, 40];
    expect(findMax(list)).toEqual(50);
})

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("Closes to Zero for negative number", () => {
    const list = [-5,-1,-7]
    expect(findMax(list)).toEqual(-1);
})

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("Max in decimal numbers", () => {
    const list = [2.5,3.77,3];
    expect(findMax(list)).toEqual(3.77);
})
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("Max in array that have non-number values", () => {
    const list = [7, "a", 42, "Z", 3.14, "x", 0, "M", -5, "9"];
    expect(findMax(list)).toEqual(42);
})

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
