function dedupe(list) {

    if(list.length === 0){
        return list;
    }
    else{
    for(let i=0;i<list.length;i++){
        for(let j=0;j<list.length;j++){
            if(list[i] === list[j] && i!=list.length-1  && i!==j){
                list.splice(j,1);
            }
        }
    }
}   
    return list;
}


module.exports = dedupe;