function hello() {
    alert("This is an message alert to say Hello - external JS");
    document.getElementById("msg2").innerHTML = "the message has been delay";
}
//>>DOM user interface (google Chrome)

//>>MDN (Mozilla Developer Network)--> good source to find method for console

//alert('Hello World');                 // alert is a method method
console.log('Hellow world');            // console is a method method
//console.error('This is an error');
//console.warn('This is a warning');

//>> Set Variable 3 ways
// var, let, const
// var is globally scopes (not recomended)
//let and const (added in 2015)
// with let you can reassigned values
let age = 30; // you are not oblige to assigned a  value right away
age = 31;
console.log(age);

const rate = 30; // you have to add a value right away
//rate=31;  // can not reassigned new value to a constant
console.log(rate);

//>> Data type
// Primitive data type: directly assigned to menory
// string, number, boolean, null, undefined, symbols
const name = 'John'; //string
//const pool = 30; //number
//const percent = 4.5; //number
//const isColl = true; //boolean
//const x=null;  //null
//const y=undefined; //undefined
//let z;  //undefined

// to test the variable type
console.log(typeof name);

//Concatenation
console.log('My name is ' + name + ' and I am ' + age); //old
//Template String
console.log(`My name is ${name} and I am ${age}`); //new
const welcome = `My name is ${name} and I am ${age}`;
console.log(welcome);

//get the length of string
console.log(welcome.length) // length is a property (not a method because no parenthesis)
console.log(welcome.toUpperCase()); // toUpperCase() is method
console.log(welcome.toLowerCase()); // toLowerrCase() is method
console.log(welcome.substring(3, 15)); // substring() is method with 2 parameter strat of the string and end
console.log(welcome.substring(3, 15).toUpperCase()); //conbinaison of methods
console.log(welcome.split('')); // return an array with each character

const s = 'technology, computers, it, code';
console.log(s.split(', '));// sptip art each ', ' and return an array of 4 elements

//>> Arrays - variable that hold mutiple value
const numbers = new Array(1, 2, 3, 4, 5); //'new' is a constructor
console.log(numbers);

const fruits = ['apples', 'oranges', 'banana', 10, true]; // Javascript allows multuple data type in the arrays
console.log(fruits);
console.log(fruits[1]);// gives oranges because arrays are 0 based

fruits[6] = 'grapes'; //append or replace at the 6th elements grappes
console.log(fruits);

fruits.push('mangos'); //append at the end elements mangos
console.log(fruits);

fruits.unshift('pears'); //append at the bigening elements peras
console.log(fruits);

fruits.pop(); //remove the last elements of the array
console.log(fruits);

console.log(Array.isArray(fruits)); // check if something is an array
console.log(Array.isArray('hello'));

console.log(fruits.indexOf('oranges')); // return the location of oranges

//>> Object Literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {        // embeded object in another object
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person);
console.log(person.firstName);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

person.email = 'john@gmai.com'; // add property to the object

const { firstname, lastName } = person;
console.log(person);

const todos = [          // array of object
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'eating with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
]
console.log(todos[2]); // print the 3rd value of the array
console.log(todos[2].text);// print the 3rd value of the array & more specificatly the text property


//const todoJSON =JSON.stringify(todos); //convert into JSON format
//console.log(todoJSON);

//>> Loops For &  While
// For
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i < todos.length; i++) {
    console.log(`For the number ${i}`);
    console.log(todos[i]); // not the best way to loop throught an array but possible
}

for (let list of todos) {
    console.log(list);
    console.log(list.text);
}

//while
let i = 0;
while (i < 10) {
    console.log(`While the loop Number ${i}`);
    i++;
}

//>>Hight order array method forEach, map ,filter
todos.forEach(function (list) {
    console.log(list.text);
});

//map return an array
const todoText = todos.map(function (list) {
    return list.text;
});
console.log(todoText);

//filter return an array
const todoCompleted = todos.filter(function (list) {
    return list.isCompleted == true;
});
console.log(todoCompleted);

//combined filter and map
const todoTextCompleted = todos.filter(function (list) {
    return list.isCompleted == true;
}).map(function (list) {
    return list.text;
});
console.log(todoTextCompleted);

//>>Conditional  if and ? and switch

const x = 11;
const y = 10;

//if
if (x == 10) { // == match value not data type
    console.log('x is 10');
}

if (x === 10 || y === 10) { // === has to match value and  data type
    console.log('x is 10 or y is 10');
} else if (x > 10) {
    console.log('x is greater 10');
} else {
    console.log('x is less 10');
}

//ternary operator ?
const color = x >= 10 ? 'blue' : 'purple';
console.log(color);

//switch
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    case 'purple':
        console.log('color is puple');
        break;
    default:
        console.log('color is not defined ');
        break;
}

//>>function
// basic function
function addNums(num1 = 1, num2 = 2) {  //set default values
    return num1 + num2;
}

console.log(addNums());
console.log(addNums(5, 6)); // overwrite default value

//arrow fucntion
const addNums2 = (num1 = 1, num2 = 2) => num1 + num2; // return num1 + num2
console.log(addNums2());
console.log(addNums2(5, 6));

todos.forEach((list) => console.log(list.text));

//>> Object programming
//objects literals to be build using a constructor function
// 2 ways : use of constructor functions with ptototypes
//or use es6 classes


//constructor functions with prototypes // start with a Capital letter
function Person(firstName, Lastname, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate an Object es5
const person1 = new Person('John', 'Doe', '4-3-1980'); // 'new, build in constructor
const person2 = new Person('Mary', 'Doe', '4-3-1984');
console.log(person1);
console.log(person2);

console.log(person2.getBirthYear());
console.log(person2.getFullName());

// Class with es6
class PersonClass {
    constructor(firstName, Lastname, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();  
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`; 
    }
}
const person3 = new PersonClass('John22', 'Smith', '4-3-1980');
const person4 = new PersonClass('Mary22', 'Cadiou', '4-3-1984');
console.log(person3);
console.log(person4);







