/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
// let money = 800;
// if(money > 500){
//     console.log('im boroloks burger khai protidin!');
// }else{
//     console.log('goribs! kala pani is my destiny...');

// }



/*** 
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/
// let weight = 80;
// let height = 150;
// let converHeight = height / 100;
// let BMI = weight / (converHeight ** 2);
// if(BMI > 0){
//     if(BMI < 18.5){
//         console.log('you are underweight');
//     } else if(BMI >= 18.5 && BMI <=24.9){
//         console.log('you are normal');
//     } else if(BMI >=25 && BMI <= 29.9){
//         console.log('you are overweight');
//     }else{
//     console.log('you are obese');
// }
// }else{
//     console.log('invalid');
// }



/***
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
// let myScore = 80;
// let myFriendScore = 90;
// if(myScore > 80){
//     if(myFriendScore > 80){
//         console.log('lets go for lunch!');
//     }
//     else if(myFriendScore < 80 && myFriendScore >= 60){
//         console.log('good luck next time.');
//     } else if(myFriendScore < 60 && myFriendScore >= 40){
//         console.log('tata bye');
//     } else if(myFriendScore < 40){
//         console.log('im blocking you');
//     }
// }else{
//     console.log('eeee eeee eeeee');
// }



/***
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 
*/
let num1 = 11;
let num2 = 10;
let result;
if(num1 > num2) {
    result = num1 * 2;
    console.log(result);
}else{
    result = num1 + num2;
}
console.log(result);


