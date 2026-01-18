// Predict and explain first...
//Since we need to display each ingredients on a new line and the ingredients property have values inside an array we need to loop through the array

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};


console.log(`${recipe.title} serves ${recipe.serves}
ingredients:`);
for(const element in recipe.ingredients){
  console.log(recipe.ingredients[element])
}

