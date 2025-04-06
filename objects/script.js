// Objects
// 1. Object literal
// 2. Object constructor
// 3. Accessing object properties
// 4. Adding properties to an object
// 5. Deleting properties from an object
// 6. Object methods
// 7. Object.keys()
// 8. Object.values()
// 9. Object.entries()
// 10. Object.assign()
// 11. Object destructuring
// 12. Object spread operator
// 13. Object.freeze()
// 14. Object.seal()
// 15. Object.isFrozen()
// 16. Object.isSealed()
// 17. Object.preventExtensions()
// 18. Object.isExtensible()
// 19. Object.getOwnPropertyDescriptor()
// 20. Object.defineProperty()
// 21. Object.defineProperties()
// 22. Object.getOwnPropertyNames()
// 23. Object.getOwnPropertySymbols()
// 24. Object.getPrototypeOf()
// 25. Object.setPrototypeOf()
const person = {
    firstname: 'Rama',
    lastname: 'Raj',
    age: 25,
    email: '',
    hobbies: ['reading', 'writing', 'coding'],
    address: {
        city: 'Ayodhya',
        state: 'UP',
        country: 'India'
    },
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        console.log(this);
        return this.age;
    }
   
};

console.log(person.age);
// console.log(person['calcAge'](1991));
