//* Write a program using only while loops to print all the even numbers from 1 to n
//* Input
//? if n = 10
//? Output
//? 2
//? 4
//? 6
//? 8
//? 10

// Output

function print_even(n){
     let i = 1;
    while (i <= n) {
        if (i % 2 === 0) { 
            console.log(i);
        }
        i++;
    } 
}
print_even(10);