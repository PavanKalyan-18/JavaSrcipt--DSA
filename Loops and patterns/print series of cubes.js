//* Print the following series using for loop:-
//  1,8,27,64,125,216,......n
//? Input
//? 125
//? Output :-
//? 1
//? 8
//? 27
//? 64
//? 125

// Solution
function print_series(n){
   for (let i = 1; i <= n; i++) {
       const cube = i * i * i;
       if (cube <= n) {
           console.log(cube);
       } else {
           break;
       }
   }
}
print_series(125)