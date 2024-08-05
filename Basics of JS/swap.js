//* Write a program to Swap two Variables a and b (Swapping basically means interchanging)
//? Input:-           Output: 
//? a = 3, b = 4      a = 4, b = 3

// Solution
function swap(a,b){
    let temp = a;
    a = b;
    b = temp;
    console.log('a value is =', a);
    console.log('b value is =', b);
}
swap(3,4)