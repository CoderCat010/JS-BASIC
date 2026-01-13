// function returnValues(num){
//     const sum = num * 10;
//     return sum;
// }
// // returnValues(4);
// // let x = returnValues(4);
// console.log(returnValues(4));


// function sumNum(num1, num2){
//     return num1 + num2;
// }
// console.log(sumNum(5, 5));


// function con(number){
//     if(number % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(con(2));


function arr(nums){
    sum = 0;
    for(const numbers of nums){
       sum += numbers;
    }
    return sum;
}
let x = [1, 2, 3, 4, 5];
let result = arr(x);
console.log(result);












