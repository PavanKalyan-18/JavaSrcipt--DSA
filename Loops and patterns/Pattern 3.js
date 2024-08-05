// Print the following pattern using for loop
// *    *
// **   **
// ***  ***
// **** ****
// **********

function print_pattern(){
    for (var i = 5; i >= 1; i--)
    {
        var str = "";
        for (var j = 10; j <= 15 - i; j++) {
            str = str + "*";
        }
        for (j = 10; j <= 8 + 1 * i; j++) {
            str = str + " ";
        }
        for (j = 10; j <= 15 - i; j++) {
            str = str + "*";
        }
        console.log(str);
    }
}
print_pattern()