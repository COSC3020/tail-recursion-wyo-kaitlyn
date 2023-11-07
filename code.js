// shout out to all the stratch paper i used to figure out this function
// originally tried to use three variables like in the iterative example
// (fib, newFib, and oldFib)
// but figured it was easier with two
function tailFibonacci(n, fib, newFib) {
    if ( n == 0 ) { return newFib; } // can also have an if statement in the test
    // to see if nat > 2 - allow you to skip this statement in the funciton

    if ( n == 1 ) { return fib; }
    else { return tailFibonacci(n - 1, fib + newFib, fib); }
} 