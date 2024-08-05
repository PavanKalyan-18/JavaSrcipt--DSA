//* Write a program to print whether a given number is an Armstrong number or not..
// (Armstrong number is a number in which all the sum of cubes of digits is equal to the number)
//? Example:-
//? Input
//? n = 153
//? Output
//? true

// Solution
function check_armstrong(n){
   let sum = 0;
   let temp = n;

   while (temp > 0) {
       let digit = temp % 10;
       sum += Math.pow(digit, 3);
       temp = Math.floor(temp / 10);
   }

   if (sum === n) {
       console.log(true);
   } else {
       console.log(false);
   }
}
check_armstrong(153)