// Print the following pattern using for loops and while loops
// *****
// ****
// ***
// **
// *

// Solution:1 using for loop
function print_pattern(){
   for (let i = 5; i >= 1; i--) {
       let row = '';
       for (let j = 0; j < i; j++) {
           row += '*';
       }
       console.log(row);
   }
}
print_pattern()


// Solution:2 using while loop
function print_pattern(){
   let i = 5;
   while (i >= 1) {
       let row = '';
       let j = 0;
       while (j < i) {
           row += '*';
           j++;
       }
       console.log(row);
       i--;
   } 
}
print_pattern()