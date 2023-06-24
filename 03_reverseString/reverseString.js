const reverseString = function(toReverse) {
    let anArray = Array.from(toReverse);
    anArray.reverse();
    return anArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
