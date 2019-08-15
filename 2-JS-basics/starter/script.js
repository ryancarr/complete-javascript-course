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

/****************************************
 * Ternary Operator and Switch statements
 */
/*
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink + '.');

// Switch statements
var job = 'instructor';

switch(job)
{
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber.');
        break;
    case 'designer':
        console.log(firstName + ' designs websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch(true)
{
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/*********************
 * Truthy and Falsy
 */

 // Falsy values : undefined, null, 0, '', NaN
 // truthy values: NOT falsy
/*
 var height;
 height = 23;

 if(height || height === 0)
    console.log('Variable is defined.');
else
    console.log('Variable is not defined.');

// Equality operators
if(height == '23')
    console.log('The == operator does type coercion!');
*/

/*********************************
 * Coding Challenge 2
 * 
 * John and Mike both play basketball in different
 * teams. In the latest 3 games, John's team scored
 * 89, 120, and 103 points, while Mike's team scored
 * 116, 94, and 123 points.
 * 
 * 1. Calculate the average score for both teams
 * 2. Decide which team wins based on average score
 * (print winner to console along with the score)
 * 3. Change the score to show a different winner
 * 
 * 4. Extra: Mary also plays basketball and her team
 * scored 97, 134 and 105 points. Log the average
 * winner to the console.
 * 
 * 5. Change thes cores to generate different winners
 */
/*
var johnScores = [110, 120, 103];
var mikeScores = [116, 94, 123];
var maryScores = [97, 134, 105];

var johnAverage = (johnScores[0] + johnScores[1] + johnScores[2]) / 3;
var mikeAverage = (mikeScores[0] + mikeScores[1] + mikeScores[2]) / 3;
var maryAverage = (maryScores[0] + maryScores[1] + maryScores[2]) / 3;

switch(true)
{
     case johnAverage > mikeAverage && johnAverage > maryAverage:
         console.log('John\'s team had the highest average at: ' + johnAverage);
         break;
    case johnAverage < mikeAverage && mikeAverage > maryAverage:
        console.log('Mike\'s team had the highest average at: ' + mikeAverage);
        break;
    case johnAverage < maryAverage && mikeAverage < maryAverage:
        console.log('Mary\'s team had the highest average at: ' + maryAverage);
        break;
    case johnAverage === mikeAverage && johnAverage > maryAverage:
        console.log('John and Mike tied with : ' + johnAverage + ' points scored.');
        break;
    case johnAverage === maryAverage && johnAverage > mikeAverage:
        console.log('John and Mary tied with : ' + johnAverage + ' points scored.');
        break;
    case mikeAverage === mikeAverage && maryAverage > johnAverage:
        console.log('Mike and Mary tied with : ' + mikeAverage + ' points scored.');
        break;
    case mikeAverage === maryAverage && maryAverage === johnAverage:
        console.log('John, Mike and Mary tied with : ' + mikeAverage + ' points scored.');
        break;
}
*/
/*************************************************
 * Functions
 */
/*
function calculateAge(birthYear)
{
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn);
console.log(ageMike);
console.log(ageJane);

// DRY - Don't Repeat Yourself

function yearsUntilRetirement(year, firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement > 0)
        console.log(firstName + ' retires in ' +
        retirement + ' years.');
    else
        console.log(firstName + ' is already retired.');
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/
/***************************************
 * Function expression
 */

// Expressions return a single value
// Statements perform an action
/*
var whatDoYouDo = function(job, firstName)
{
    switch(job)
    {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';        
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/*************************************
 * Arrays
 */
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);

names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue');
john.unshift('Mr');
console.log(john);
john.pop();
console.log(john);
john.shift()
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ?
'John is NOT a designer.' : 'John IS a designer.';
console.log(isDesigner);
*/

/***********************************************
 * Code Challenge 3
 */

function calculateTip(bills)
{
    var total = new Array();
    
    bills.forEach(element =>
    {
        if(element < 50)
            total.push(element + (element * .2));
        else if(50 <= element && element <= 200)
            total.push(element + (element * .15));
        else
            total.push(element + (element * .1));        
    });

    return total;
}

var bills = [124, 48, 268];
var totals = calculateTip(bills);

console.log(bills);
console.log(totals);