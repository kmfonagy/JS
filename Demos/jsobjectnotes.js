//Java script obects don't have a fixed order
//Two choices: brackets & dot notation
var person = {
    name: "Name",
    age: xx,
    city: "City"
};

//brackt notation, similar to arrays:
console.log(person["name"]);
//do notation:
console.log(person.name);

//cannot use dot notation if prop starts with #
someObject.3fhfh  //invalid
someObject["3fhfh"] //valid

//you can lookup using a variable with bracket notation
var str = "name";
someObject.str //doesn't look for "name"
someObject[str] //does evaluate str & looks for "name"

//you cannot us dot notation for property names w/ space
someOject.fav color       //invalid
someObject["fav color"];  //valid

//to update age
person["age"] += 1;
//to update city
person.city = "London";

//make an empty object & then add to it
var person = {}
person.name = "Name";
person.age = 21;
person.city = "City";

//all at once
var person = {
    name: "Name";
    age: 21;
    city: "City";
};

//another way of initializing an Obj
var person = new Object();
person.name = "name";
person.age = 33;
person.city = "City";

//Objects can hold all sorts of data
var junkObject = {
    age: 57,
    color: "color",
    isHungry: true,
    friends: ["Name1", "name2"],
    pet: {
        name: "Pet",
        species: "Type",
        age: 3
    }
};

// ARRAYS - keys are always [Number]
var dogs = ["Sadie", "Tank", "Max"];

dogs[1];
//Tank


//to add info
dogs.push("newDog")

//to change
dogs[1] = "stinky"


// OBJECTS - keys are item, value is the entered info
var dog = {
    name: "Sadie",
    breed: "Husky"
}

dog["name"]
//Sadie
dog.name
//Sadie

//to add info, can add any key & value
dog.age = 8;

//to change info
dog.breed = "Husky-mix"

//Nested Obj & Arr
var posts = [
    {
        title: "title1",
        author: "name1",
        comments: ["Blah", "Blah"]
    },
    {
        title: "title2",
        author: "name2",
        comments: ["Stuff", "stuff"]
    }
]

//to access 2nd comment in 2nd post
posts[1].comments[1]


//Quiz 1
var someObject = {};

//Which are valid
someObject._name = "Name";  //valid
someObject.age = 4;         //valid

var prop = "color"
someObject[prop] = "red";   //valid

someObject.123 = true;      //invalid

//Quiz 2
var someObject = {
    friends: [
        {name: "Malfory"},
        {name: "Crabbe"},
        {name: "Goyle"}
        ],
    color: "baby blue",
    isEvil: true
};
undefined

someObject
{friends: Array(3), color: "baby blue", isEvil: true}

someObject.friends[0]
{name: "Malfory"}

someObject.friends[0].name
"Malfory"

someObject.color
"baby blue"

someObject.isEvil
true