const removeFromArray = function(anArray, x) {
    let newArray = [];
    let no = [].concat(Array.from(arguments));
    anArray.forEach(function(i) {
        if (!no.includes(i)) newArray.push(i);
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
