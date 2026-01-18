function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const newArr = pair.split("=");
    let Key='';
    let value='';
    if(newArr.length > 2){
      key=newArr[0];
      for(let i=1;i<newArr.length;i++){
        value+=newArr[i]+'=';
      }
    }
    queryParams[key] = value;
  }

  return queryParams;
}

console.log(parseQueryString("equation=x=y+1"));
module.exports = parseQueryString;
