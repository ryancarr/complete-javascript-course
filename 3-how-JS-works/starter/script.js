///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1990);

function calculateAge(year)
{
    console.log(2019 - year);
}

var retirement = function(year)
{
    console.log(65 - (2019 - year));
}

retirement(1990);

console.log(age); // Undefined
var age = 23;
console.log(age);


// Scoping
function foo()
{
    console.log(age); // Hoisting also occurs here
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
/*
console.log(this); // The global Obj or Window

calculateAge(1983);

function calculateAge(year)
{
    console.log(2019-year);
    console.log(this); // This is still global Obj
}

var john = 
{
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function()
    {
        console.log(this); // John object
        console.log(2019 - this.yearOfBirth);

        function innerFunction()
        {
            console.log(this); // Back to global Obj
        }

        innerFunction();
    }
};

john.calculateAge();

var mike = 
{
    name: 'Mike',
    yearOfBirth: 1984
};

// Function borrowing
mike.calculateAge = john.calculateAge;

mike.calculateAge();
*/