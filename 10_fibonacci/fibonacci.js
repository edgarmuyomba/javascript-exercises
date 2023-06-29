const fibonacci = function(i) {
    if ( i < 0 ) return 'OOPS';
    arr = [];
    for (let j = 0; j <=i; j++) {
        arr.push(f(j));
    }
    return arr[i-1];
};

const f = function(n) {
    if (n === 0 || n === 1) return 1;
    else return f(n-1) + f(n-2);
}

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
