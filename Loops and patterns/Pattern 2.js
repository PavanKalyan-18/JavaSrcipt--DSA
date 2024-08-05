// Print the following pattern using for loop and while loop
// *****
// ****
// ***
// **
// *
// *
// **
// ***
// ****
// *****

// Solution:1 using for loop
function print_pattern(){
   for (let i = 5; i >= 1; i--) {
       let row = '';
       for (let j = 0; j < i; j++) {
           row += '*';
       }
       console.log(row);
   }
   for (let i = 1; i <= 5; i++) {
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
   while (i >= 1)
   {
       let str = "";
       let j = 0;
       while (j < i)
       {
           str = str + "*";
           j++;
       }
       console.log(str);
       i--;
   }
   i = 1;
   while (i <= 5)
   {
       let str = "";
       let j = 0;
       while (j < i)
       {
           str = str + "*";
           j++;
       }
       console.log(str);
       i++;
   }
}
print_pattern()