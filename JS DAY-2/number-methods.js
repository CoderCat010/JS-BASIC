// // toFixed(digits)
// const num = 123.456789;
// console.log(num.toFixed(2));
// console.log(Number(num.toFixed(2)));


// // toString()
// const NumtoStr = 255;
// console.log(NumtoStr.toString());


// // isFinite()
// Number.isFinite(value)
// let a = 123;
// let b = Infinity;
// let c = '123';  
// console.log(isFinite(a));
// console.log(isFinite(b));
// console.log(isFinite(c));
// console.log(Number.isFinite(c)); // // ekhane type check korce but number e convert korce na etai niom je jokhon amra type check korbo tokhon amake Number.isFinite use korte hobe.r jokhon amara type check korbo na tokhon amra isFinite use korte parbo tokhon true dekhabe karon isfinite automatic type conversion kore ney.


// // isInteger
// let a = 123;
// let b = 123.45;
// let c = '123';
// let d = Infinity;
// let e = NaN;
//console.log(isInteger(a)); // // ekhane isInteger use korle error dekhabe karon isInteger holo Number er method. tai amake Number er sathe use korte hobe. isinteger sorasori use kora jay na.
// console.log(Number.isInteger(a));
// console.log(Number.isInteger(b));
// console.log(Number.isInteger(c));
// console.log(Number.isInteger(d));
// console.log(Number.isInteger(e));



// // isNaN()
// let a = 123;
// let b = 'hello';
// let c = NaN; 
// console.log(isNaN(a)); // // ekhane isNaN use korle error dekhabe karon isNaN holo Number er method. tai amake Number er sathe use korte hobe. isNaN sorasori use kora jay na.
// console.log(Number.isNaN(a));
// console.log(Number.isNaN(b)); // // eikahne number e convert korce tai false dekhacce karon convert hoye seta number hoto. kintu jodi sudhu isNaN use kortam tahole true dekhato kaorn hello asholei tokhon number hoto na.
// console.log(Number.isNaN(c));


// // parseFloat()
// let a = '123.45abc';
// let b = 'abc123.45';
// let c = '123.45';
// let e = '123.45.67';
// console.log(parseFloat(a));
// console.log(parseFloat(b)); // // ekhane jodi string er surute number na thake tahole parseFloat NaN return korbe.
// console.log(parseFloat(c));
// console.log(parseFloat(e));