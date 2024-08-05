//* By using while loop and continue statement
//todo Print all number from 1 to n but then it should not be divisible by 5
//? Example:-
//? Input:-
//? n=7
//? output:-
//? 1
//? 2
//? 3
//? 4

// Solution
function print_output(n) {
    let i = 1;
    while (i <= n) {
        if (i % 5 === 0) {
            i++;
            continue;
        }
        console.log(i);
        i++;
    }
} 
print_output(7)