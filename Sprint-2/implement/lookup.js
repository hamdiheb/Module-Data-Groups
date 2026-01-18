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

console.log(createLookup([['US', 'USD'], ['CA', 'CAD']]));
module.exports = createLookup;

/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When
 - createLookup function is called with the country-currency array as an argument

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/