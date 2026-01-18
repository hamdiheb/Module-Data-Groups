function sum(elements) {
    const elementNumbers = elements.filter((element) =>typeof element === 'number');
    let sum =0

    if(elements.length === 0){
        return 0;
    }

    // else if(elements.length > 0 && elementNumbers != []){
    //     return 'Non-Number';
    // }

    else {
    elementNumbers.forEach(element => {
        sum+=element;
    });
    return sum;
    }
}

console.log(sum(['1',1,2]));
module.exports = sum;
