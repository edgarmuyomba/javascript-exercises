const repeatString = function(toRepeat, num) {
    let astring = '';
    if (num < 0) return 'ERROR';
    for(let i=0; i < num; i++) {
        astring += toRepeat;
    }
    return astring;
};

// Do not edit below this line
module.exports = repeatString;
