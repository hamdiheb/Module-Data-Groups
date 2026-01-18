// Predict and explain first...
//Okay we are trying to display our object property values 

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// 1)for of loop doesn't work on object 2)authorvalue isn't defined variable of the for in loop , we should use value 3)we need to display the property values and not the key to do that we need to use value as the index

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};


for (const value in author) {
  console.log(author[value]);
}
