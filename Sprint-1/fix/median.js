// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).


function calculateMedian(list) {

    const listNumber = list.filter((element) => typeof element ==='number');
    const listnumberOrdered = listNumber.sort((a, b) => a - b);
    const pos = Math.floor(listnumberOrdered.length/2);

    if(listnumberOrdered.length % 2 > 0){
        return listnumberOrdered[pos];
    }
    else{
        return listnumberOrdered[pos-1]+0.5;
    } 
}

console.log(calculateMedian(['not an array', 123, null, undefined, {}, [], ["apple", null, undefined]]));
module.exports = calculateMedian;
