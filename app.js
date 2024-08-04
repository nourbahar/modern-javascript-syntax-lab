// Exercise 1: Applying Array.prototype.map()

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const array2 = nums.map((currentElement) => {
  return currentElement *2;
});

console.log("Exercise 1:"); 
console.log(array2)

// Exercise 2: Array destructuring


const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstTopping, secondTopping] = pizzaToppings;
console.log("Exercise 2:"); 
console.log(firstTopping); 
console.log(secondTopping); 

// Exercise 3: Destructuring objects

const car = {
    make: 'Audi',
    model: 'q5',
  };
  

  const { make, model } = car;
  console.log("Exercise 3:"); 
  console.log(car.make); 
  console.log(car.model); 

  // Exercise 4: Applying the spread operator on arrays

  const Toppings = ['spinach','jalapino', 'chicken'];
  const controversialPizzaToppings = [...pizzaToppings,...Toppings];
  console.log("Exercise 4:"); 
  console.log(controversialPizzaToppings);


  // Exercise 5: Applying the spread operator on objects

  const myCar = { ...car };

myCar.model = 'q7';
console.log("Exercise 5:"); 
console.log('Original: ', car); 
console.log('Clone: ', myCar);


// Exercise 6: Dynamic keys in objects

// Create an object named userProfile. 
const userProfile = {
    
}
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
const propertyName = 'username';
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
userProfile[propertyName] = 'nour';
console.log("Exercise 6:"); 
console.log(userProfile);

// Exercise 7: Import and Export

// Exercise 8: Default parameters

// Create a function that takes two parameters, 
//`noun` and `adjective`, 
//both with the following respective default values:
 function cats(noun='cat',adjective='white'){
  
console.log(`the ${noun} is ${adjective}`)
 }
 console.log("Exercise 8:"); 
 cats()

// Exercise 9: Ternary Operator

console.log("Exercise 9:"); 
let pizza = 'tasty';

pizza === 'tasty' ? console.log('yum') : console.log('yuck');


// Exercise 10: Boolean Gates

console.log("Exercise 10:"); 
const localLangConfig = null;
const LANG = localLangConfig || 'en';

console.log('Language setting:', LANG); 
const userSavedTheme = null; 
const USER_THEME = userSavedTheme || 'light';

console.log('User theme setting:', USER_THEME);