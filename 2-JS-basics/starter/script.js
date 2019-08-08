/*****************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var if = 23;
*/

/*******************************
 * Variable mutation and type coercion
 */

 /*
 var firstName = 'John';
 var age = 28;

 console.log(firstName + ' ' + age);

 var job, isMarried;

 job = 'teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age +
 ' year old ' + job + '. Is he married? ' + isMarried);

 age = 'twenty eight';
 job = 'driver';

 alert(firstName + ' is a ' + age + ' year old ' + 
 job + '. Is he married? ' + isMarried);

 var lastName = prompt('What is his last name');

 console.log(firstName + ' ' + lastName);
 */

/*******************************
 * Basic Operators
 */
/*
var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2019;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10); // Doesn't use floor division

// Logical operators

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*******************************
 * Operator Precedence
 */
/*
var now = 2019;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 26
console.log(x, y);

x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/

/************************************
 * Coding Challenge 1
 */
/*
var johnHeight = 1.53;
var markHeight = 1.80;

var johnMass = 70;
var markMass = 85;

var johnBMI = johnMass / johnHeight**2;
var markBMI = markMass / markHeight**2;

console.log(markBMI, johnBMI); // Error check

var markHigherBMI = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s? ' + 
            markHigherBMI);
*/

/**********************************
 * If / Else Conditions
 */
/*
 var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married')
{
    console.log(firstName + ' is married.');
}
else
{
    console.log(firstName + ' is not married.');
}

var isMarried = false;
if(isMarried)
{
    console.log(firstName + ' is married.');
}
else
{
    console.log(firstName + ' is not married.');
}

var johnHeight = 1.53;
var markHeight = 1.80;

var johnMass = 70;
var markMass = 85;

var johnBMI = johnMass / johnHeight**2;
var markBMI = markMass / markHeight**2;

console.log(markBMI, johnBMI); // Error check

var markHigherBMI = markBMI > johnBMI;

if(markHigherBMI)
    console.log('Mark\'s BMI is higher than John\'s.');
else
    console.log('John\'s BMI is higher than Mark\'s.');
*/

/**************************
 * Boolean Logic
 */

 /*
var firstName = 'John';
var age = 16;

if(age < 13)
    console.log(firstName + ' is a boy.');
else if(age >= 13 && age < 20)
    console.log(firstName + ' is a teenager.');
else if(age >= 20 && age < 30)
    console.log(firstName + ' is a young man.');
else
    console.log(firstName + ' is a man.');
*/

