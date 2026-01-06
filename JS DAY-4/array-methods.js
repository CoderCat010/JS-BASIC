//* JS METHODS 

// // array property
// let x = [1, 2, 3, 4, 5]
// console.log(x.length);



//----------ADDING ELEMMMENT METHOHDS----------
// // push -- adding from last
// let x = [1, 2, 3, 4, 5];
// x.push(6)
// console.log(x); // puro array ta dekhacce 
// console.log(x.push(7)); // ekhane x.push mane notun value ta add korbe ar sei sathe notun array er length ta return korbe. 

// // unshift --- adding from first
// let x = [1, 2, 3, 4, 5]; 
// x.unshift(0); 
// console.log(x); // puro array ta dekhacce sathe length o dekhacce



//----------REMOVING ELEMMMENT METHOHDS----------
// // pop -- removing from last
// let x = [1, 2, 3, 4, 5];
// x.pop();
// console.log(x);
// console.log(x.pop()); // ekhane x.pop mane last theke ekta value remove korbe ar sei value ta return korbe.
// console.log(x); // ekhane dekhacce last theke 2 ta value remove hoise tai array te 3 ta value ase.

// // shift -- removing from first
// let x = [1, 2, 3, 4, 5];
// x.shift();
// console.log(x);
// console.log(x.shift()); // ekhane x.shift mane first theke ekta value remove korbe ar sei value ta return korbe.
// console.log(x); // ekhane dekhacce first theke 2 ta value remove hoise tai array te 3 ta value ase.

// slice
// let x = [1, 2, 3, 4, 5];
// console.log(x.slice(1)); // ekhane slice method 1 index theke suru kore array er sesh porjonto element gulo new array hisebe return korbe. tai output hobe 

// console.log(x.slice(1, 4)); // ekhane slice method 1 index theke suru kore 4 index er age porjonto element gulo new array hisebe return korbe. tai output hobe [2, 3, 4]



//----------SEARCHING ELEMMMENT METHOHDS----------
// // indexOf
// let x = [1, 2, 3, 4, 5];
// let y = ['abc', 'def', 'ghi', 'jkl'];
// console.log(x.indexOf(33)); // jodi kono element na thake tahole -1 return korbe
// console.log(y.indexOf('ghi'));

// // includes 
// let x = [1, 2, 3, 4, 5];
// console.log(x.includes(9));
// let y = ['abc', 'def', 'ghi', 'jkl'];
// console.log(y.includes('e')); // includes method entire element ta check kore, tar moddhe kono part check kore na. tai ekhane false return korbe. jodi 'def' check kortam tahole true return korto karon eta puro ekta element r e hocce element er ekta part o e ke ekta element hishbe dhorce but jeta ekhane check korsi seta puro element na tai false. ba onno vabe bola jay je o puro element ta check kore element er moddhe kono part check kore na.



//----------ARRAY SORTING METHOHDS----------        
// // sort      
let x = [5, 3, 8, 1, 4, 6, 7];                 
console.log(x.sort()); 

let y = [11, 2, 33, 4, 25, 6, 17];
console.log(y.sort()); 









