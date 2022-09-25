// Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
//  Console.log(randomCar) will print Tesla
//  Console.log(otherRandomCar) will print Mercedes


// Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);
// Console.log(name) will print a reference error because name is a key within the employee object, it would need to be written as Console.log(employee.name)
//  Console.log(otherName) will print Elon


// Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
// Console.log(password) will print 12345
// Console.log(hashedPassword) will print undefined because password does not exist in our object


// Problem 4 
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
// console.log(first == second) will print a boolean value of false because first is 8 and second is 5
// console.log(first == third) will print true because first and third are both the same value, 2


// Problem 5 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// console.log(key) will print value
// console.log(secondKey) will print [1,5,1,8,3,3]
// console.log(secondKey[0]) will print 1 since its the 0 index of the array
// console.log(willThisWork) will print 5 because we declared secondKey as its own variable already, so now we are just destructuring the array within it