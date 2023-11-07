const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function fib(n) {
    if (n <= 2) { return 1; }
    else { return fib(n-1) + fib(n-2); }
}   

const testFib =
    jsc.forall("nat", (nat) => {
        if (nat > 0) {
            return fib(nat) == tailFibonacci(nat, 1, 0);
        }
        return true;
    });

jsc.assert(testFib);