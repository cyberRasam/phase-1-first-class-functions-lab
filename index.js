// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {

    return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers) => {
   
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function (fare) {
        return fare * num;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, callback) => {
    return callback(drivers)
} 
