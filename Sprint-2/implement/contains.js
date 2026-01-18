function contains(object, chara) {
    const obj = object;
    const char = chara;
    let check = false;
    const keysArray = Object.keys(obj);

    for(const element in keysArray){
        if(keysArray[element] === char){
            check = true;
        }
    }
    return check;
}

console.log(contains({a: 1, b: 2}, 'f'));
module.exports = contains;

