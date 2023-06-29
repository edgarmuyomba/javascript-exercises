const palindromes = function (aString) {
    bString = aString.toLowerCase().replace(/[^a-z0-9]/g, "").replace(' ', '');
    return bString.split('').reverse().join('') === bString;
};

// Do not edit below this line
module.exports = palindromes;
