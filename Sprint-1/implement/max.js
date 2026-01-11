function findMax(elements) {
    const arrayFiltered = elements.filter((element) =>typeof element === 'number');
    let max=0;
    for(let i=0;i<arrayFiltered.length;i++){
        if(arrayFiltered[i]>max){
            max=arrayFiltered[i];
        }
    }
    return max;
}

console.log(findMax(['hey', 10, 'hi', 60, 10]));
module.exports = findMax;
