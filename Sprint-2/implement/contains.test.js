const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise
test("Return true if the object contains the property", ()=>{
    expect(contains({a: 1, b: 2}, 'c')).toEqual(false);
})
// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", ()=> {
    expect(contains({}, 'c')).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("return true for an existing property name", ()=> {
    expect(contains({a: 1, b: 2}, 'a')).toEqual(true);
})

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("Return false for non-existen property name", ()=>{
    expect(contains({a: 1, b: 2}, 'c')).toEqual(false);
})

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("Return false for invalid paramters like an array", ()=> {
    expect(contains({a:1, b:2}, [1,2])).toEqual(false);
})
