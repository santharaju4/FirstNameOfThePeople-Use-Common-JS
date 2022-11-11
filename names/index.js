const getFirstNames = require("../utilities/utils/index");
const peopleNames = require("../country/state/city/index");
console.log(peopleNames);

const getPeopleInCity = (peopleNames) => {
  return getFirstNames(peopleNames);
};

console.log(`${getPeopleInCity}`);

module.exports = getPeopleInCity;
