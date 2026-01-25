/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("Empty Array", () => {
    expect(sum([])).toEqual(0);
})

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("One number array", () => {
    const list = [7, 42, 0, 9];
    expect(sum(list)).toEqual(58);
})

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("Sum with negative numbers arrat", () => {
    const list = [7, 42, 0, -5, 9];
    expect(sum(list)).toEqual(53);
})
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("Sum of array with decimal and float number", () => {
    const list = [7, 42, 3.14, 0, -5];
    expect(sum(list)).toEqual(47.14);
})

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("Sum of number from array which contain non-number values", () => {
    const list = [7, "a", 42, "Z", 0, "x", -5, "M", 9];
    expect(sum(list)).toEqual(53);
})
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
