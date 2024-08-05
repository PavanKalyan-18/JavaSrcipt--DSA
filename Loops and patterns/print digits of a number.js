//* Write a program to print the digits of a number .
//? Input:-
//? N - 153 .
//? output:-
//? 3
//? 5
//? 1

// Solution
function print_digits(n){
    let digits = n.toString().split('');
    for (let i = digits.length - 1; i >= 0; i--) {
        console.log(digits[i]);
    }
}
print_digits(153)