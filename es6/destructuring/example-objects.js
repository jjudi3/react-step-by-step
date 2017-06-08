//MDN
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values
// from arrays, or properties from objects, into distinct variables.

var person = {
  name: 'Rob',
  age: 37,
  city: 'Seattle',
  male: true
}

console.log(person);

// these will return undefined
console.log(name);
console.log(age);
console.log(location);
console.log(male);

// these will give us access with DOT notation
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.male);

// these will give us access with BRACKETT notation
console.log(person['name']);
console.log(person['age']);
console.log(person['city']);
console.log(person['male']);

// That is quite a bit more work to use brackett and dot notation. What if we could free up these property and
// values from an object.

// We can! Destructuring
var { name, age, city, male } = person;

// we simply begin with the keyword var. You can also use let or const at your discretion. Then you can name
// the different properties that you would like to free up from their object they are in.
// in this case let's go ahead and name all of the properties
// and finally, we have to set this equal to the object you are trying to free the properties from.

// the syntax is var/const/let { //properties  } = object
// let's test it out
console.log(name);
console.log(age);
console.log(city);
console.log(male);

// so there you go.
