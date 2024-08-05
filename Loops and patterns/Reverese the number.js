//* Write a program to return the reverse of a number
//? Input
//? n = 123
//? output
//? 321

// Solution
function reverse(n){

    const reversed = parseInt(Math.abs(n).toString().split('').reverse().join(''));
    return n < 0 ? -reversed : reversed;
}
console.log(reverse(123));