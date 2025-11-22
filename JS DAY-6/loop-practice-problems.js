//একটি array-এর সব element print করো।
// let getElm = [3, 5, 6, 7, 9];
// for(let items of getElm){
//     console.log(items);
// }


// array-এর সব element reverse order-এ print করো।
// let getElm = [3, 5, 6, 7, 9];
// for(let i = getElm.length - 1; i >= 0; i--){
//     console.log(getElm[i]);
// }


// array-এর সব সংখ্যার যোগফল বের করো।
// var addingElem = [1, 3, 4, 5, 6];
// var getElm = 0;

// for(let i=  0; i < addingElem.length; i++){
//     getElm += addingElem[i];
//     // console.log(getElm);
// }
// // console.log(getElm);


/**
 * array-এর সর্বোচ্চ সংখ্যা খুঁজে বের করো।
 * array-এর সর্বনিম্ন সংখ্যা খুঁজে বের করো।
**/
var getElem = [1, 3, 4, 5, 6];
var maxElem = 0;
for(let i = 0; i < getElem.length; i++){
    if(getElem[i] > maxElem){
        maxElem = getElem[i];
    }
}
console.log(maxElem);
