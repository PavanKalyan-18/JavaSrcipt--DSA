//* Given a variable D (distance) write a program to print the cost associated with it as shown in the image:-
//* Assign a value to double variable cost depending on the value of integer variable distance as follows:
//? Distance                               cost
//? 0 through 100                           5.00
//? More than 100 but not more than 500     8.00
//? More than 500 but less than 1,000       10.00
//? 1,000 or more                           12.00

//todo     Input:-     Output:-
//todo     D = 700       10 

// Solution
function cost(distance){
    let cost;
    if (distance <= 100){
        cost = 5;
    }
    else if (distance <= 500){
        cost = 8;
    }
    else if (distance <= 1000){
        cost = 10;
    }
    else {
        cost = 12;
    }
    console.log(cost);
}
cost(700)