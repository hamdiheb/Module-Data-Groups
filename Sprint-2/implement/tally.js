function tally() {
    const str = ['a', 'a', 'a'];
    const strNew = str;
    const object = {};

    for(let i=0;i<str.length;i++){
        let key='';
        let value=0;
        if(str[i] != ''){
            key=str[i];
            value=1;
            for(let j=0;j<str.length;j++){
                if(j!=i && str[i] === strNew[j]){
                    value++;
                    strNew[j]='';
                }
            }
        }
        const obj = {[key] : value};
        if(value !=0){
            Object.assign(object,obj)
        }
    }
    return object;
}

console.log(tally());
module.exports = tally;

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */