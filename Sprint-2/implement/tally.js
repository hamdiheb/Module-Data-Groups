function tally(str) {
    
    const strNew = str;
    const object = {};

    if(str.length === 0){
        return object;
    }
    else if(Array.isArray(str) === false){
        return 'Error';
    }
    else{
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
}


module.exports = tally;

