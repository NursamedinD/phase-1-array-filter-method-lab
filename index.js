const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(driversList, name) {
    return driversList.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver.startsWith(name));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}