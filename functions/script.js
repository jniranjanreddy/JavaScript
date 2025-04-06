 'use strict';
// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice; 
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3)

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// cutFruitPieces(2);

// function myName() {
//     console.log('Hello my name is NirU');
// }
// myName();
//-----------------------------------------
// function myName2(fname, lname) {
//     console.log(`Hello my name is ${fname} ${lname}`);
// }
// myName2('Sri', 'Rama Sita');
//-----------------------------------------
// function paramFunction(param1, param2) {
// function fruitProcessor(apples, oranges) {
//    console.log(apples, oranges);
//    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//    return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleJuice2 = fruitProcessor(3, 1);
// console.log(appleJuice2);
//-----------------------------------------
//-----------------------------------------
// ## Declaration Function
// function calcAge(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge(1991);
// console.log(age1);

// ## Expression Function
// const calcAge2 = function (birthYear) {
//     return 2047 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age2);


// ## Arrow Function
const calcAge3 = birthYear => 2047 - birthYear;
const age3 = calcAge3(1990);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2047 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}