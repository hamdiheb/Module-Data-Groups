function findMax(elements) {
    
    const arrayFiltered = elements.filter((element) =>typeof element === 'number');
    // let max=0;

    if(elements.length === 0){
        return -Infinity;
    }
    else{
    // for(let i=0;i<arrayFiltered.length;i++){
    //     if(arrayFiltered[i]>max){
    //         max=arrayFiltered[i];
    //     }
    // }
    return Math.max(...arrayFiltered);
    }
    // return max;
    
}

console.log(findMax([2.5,3.77,3]));
module.exports = findMax;
