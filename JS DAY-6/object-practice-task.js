//* Access the golden rod color value in output.
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// console.log(colors['golden rod']);



//* For this object below add a property named passenger capacity with value 5
/* const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
}; */
// car.passenger = 5;
// console.log(car);

// or
// console.log(car.passenger = 5, car);



//* Display the physics marks as output.
/* const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks); */



// *Count the number of properties.
/*let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
// let keys = Object.keys(student)
// console.log(keys.length);

// count it by loop
let count = 0;
for(let keys in student){
    count++;
    console.log(keys);
    
}
console.log(count); */



// Loop through an object and print the key-value pairs with their types
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(let checkType in myObject){
    console.log(`key: `+ checkType+ ' | '+`type: `+ typeof checkType, `value: `+ myObject[checkType]+ ' | '+`type: `+ typeof myObject[checkType]);
    
    // or
    console.log(`key: `+ checkType+ ' | '+`type: `+ typeof checkType);
    console.log(`Value: `+ myObject[checkType]+ ' | '+`type: `+ typeof myObject[checkType]);
} 




