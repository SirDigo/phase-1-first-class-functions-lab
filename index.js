// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2);
}

const returnLastTwoDrivers = function(array) {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 const createFareMultiplier = i => {
     return function(i) {
         return i * i;
     }
 }

const fareDoubler = fare => fare*2;

const fareTripler = fare => fare*3;

function selectDifferentDrivers(arrayDrivers, functions) {
    return functions(arrayDrivers) 
}
