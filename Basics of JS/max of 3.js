//* Write a program to print the largest of the three numbers.
//? Input:-                   Output: 
//? a = 3, b = 5, c = 1         5

// Solution
function largest(a,b,c){
    if ( a > b && a > b){
        console.log(a);
    }
    else if ( b > a && b > c){
        console.log(b);
    } else {
        console.log(c);
    }
}
largest(3,5,1)