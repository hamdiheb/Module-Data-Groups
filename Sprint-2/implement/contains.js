function contains(object, char) {

    let check = false;
    const keysArray = Object.keys(object);

    for(const element in keysArray){
        if(keysArray[element] === char){
            check = true;
        }
    }
    return check;
}


module.exports = contains;

