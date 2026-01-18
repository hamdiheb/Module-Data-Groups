function createLookup(countryCurrencyPairs) {
  let obj = {};
  for(const item in countryCurrencyPairs){
    const valueByIndex = countryCurrencyPairs[item];

    const key = valueByIndex[0];
    const value = valueByIndex[1];

    const objectData = {[key] : value}
    Object.assign(obj, objectData);
  }
  return obj;
}


module.exports = createLookup;

