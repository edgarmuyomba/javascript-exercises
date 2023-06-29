const findTheOldest = function(arr) {
    return arr.sort((a, b) => {
        currentYear = (new Date).getFullYear();
        if (!a.yearOfDeath) a.yearOfDeath = currentYear;
        else if(!b.yearOfDeath) b.yearOfDeath = currentYear;
        return (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1 
    })[0];
}
// Do not edit below this line
module.exports = findTheOldest;
