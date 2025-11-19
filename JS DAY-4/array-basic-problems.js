//? একটি array এর প্রথম উপাদান বের করো
// var getElement = ['f', 'g', 'j'];
// console.log(getElement[0]);


// একটি array এর length বের করো
// var getLength = [1, 2, 3, 4, 5, 6];
// console.log(getLength.length);



// একটি array এর সব উপাদানকে একসাথে string এ join করো
// var joinStr = [1, 3, 5, 6];
// console.log(joinStr.join('+'));


/**
 * একটি array এর শেষে একটি value যোগ করো (push)
 * একটি array এর শুরুতে একটি value যোগ করো (unshift)
 * একটি array থেকে শেষ value মুছে ফেলো (pop)
 * একটি array থেকে প্রথম value মুছে ফেলো (shift)
 * একটি array এর কপি তৈরি করো (slice)
 */
var addValue = [2, 4, 5, 6];
var adding = addValue.push(8, 9);
console.log(addValue);

var addValue = [2, 4, 5, 6];
var adding = addValue.unshift(8, 9);
console.log(addValue);
