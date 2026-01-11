// const battle = {
//     brand: 'chud ling pong',
//     price: 40,
//     color: 'white',
//     isClean: true
// }
// console.log(battle);


// const battle = {
//     brand: 'chud ling pong',
//     price: 40,
//     color: 'white',
//     isClean: true,
//     numArr: [1, 2, 3, 4,5],
//     anotherObj: {
//         name: 'cat',
//         color: 'dark',
//         age: 2,
//         owner: 'megh'
//     }
// }
// console.log(battle.anotherObj);


const battle = {
    brand: 'chud ling pong',
    price: 40,
    color: 'white',
    isClean: true,
    numArr: [1, 2, 3, 4,5],
    anotherObj: {
        name: 'cat',
        color: 'dark',
        age: 2,
        owner: 'megh'
    }
}
// battle.weight = '2kg';// add new property
battle.price = 80; // updated value 
delete battle.color; // deleted color property
console.log(battle); // note: ekhane obj hocce non primitive orthat property chnage update even whole obj tar refernce o change kora jabe until amra const eta diye declare na kori mane let var diye egulo allowed scope er differnet syntax er karone but joi const diye declare kori tahole value change kora jabe but whole obj ta change kora jabe na its not changable when we declare by const variable. 
// ---> for example:
// battle.price = 100;
// console.log(battle.price); // property mutable change kora jabe const thaklew but...
// battle = {salery: 1400} // ekhane refernce error ashbe karon amra whole obj ta set korechilam ekta vinno memory address e but eikhane amra whole obj tai change kore notun kore assign korteci jeta const diye hobe na const scope syntax er karone. so summery is const ---> reference immutable, property mutable. jodt let var diye kortam tahole seta possibel hoto errpr dito na.
// console.log(battle);





