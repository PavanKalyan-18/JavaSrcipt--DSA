//* Write a program to assume a value of marks and print whether a person has failed or passed using ternary Operator.
//todo  If Marks >= 40 --> pass
//todo  ELSE ---> fail
//? Input:-                      Ouput:-
//? Marks = 52                    pass

// Solution
function haspassed(marks){
    let result;
    result = (marks >= 40) ? 'pass' : 'fail';
    console.log(result);
}
haspassed(52)