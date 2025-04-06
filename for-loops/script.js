


// for(let rep = 1; 
//     rep <= 10; rep++) {
//     console.log(`Lifting weights for loop repetition ${rep}`);
// }


// Basic for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(`Count ${i}`);
// }


// // Example with an array
// const fruits = ["Apple", "Banana", "Cherry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // Example with an object
// const person = { name: "John", age: 30, city: "New York" };
// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

// // 
// const fruits1 = ["Apple", "Banana", "Cherry"];
// for (let fruit of fruits1) {
//     console.log(fruit);
// }

// //  For Loop with Step Increments
// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// //  For Loop with Negative Step
// for (let i = 10; i >= 0; i--) {
//     console.log('count', i);
// }


// const fruits1 = ["Apple", "Banana", "Grapes", "Cherry", "Mango"];
// for (let fruit of fruits1) {
//     if (fruit === "Cherry") break;
//     console.log("Thi is break")
//     if (fruit === "Cherry") continue;
//        console.log(fruit)
// }

// loop through sttrings
// const str = "Hellloo"; 
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

// const students = [
//     { name: "Alice", age: 20 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 21 }
// ];

// for (let i = 0; i < students.length; i++) {
//     console.log(`${students[i].name} is ${students[i].age} years old`);
// }

//Looping with a Dynamic Condition

let count = 0;
for (; count < 3; ) {
    console.log(`Count: ${count}`);
    count++;
}