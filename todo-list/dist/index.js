"use strict";
// string - number - boolean
const myName = "Redi";
const myAge = 25;
const isAuth = true;
// Oggetti
const user = {
    name: "Alessandra",
    age: 33,
    isAuth: true
};
// Array
const array = ["blue", "red", "green", "yellow", 34, 45, null];
// Funzioni
const myFunction = (array, obj) => {
    console.log(array, obj);
};
myFunction(array, user);
// Types - interface - optionals
const printArray = (arr, obj) => {
    console.log(arr, obj);
};
printArray(array, {
    name: "ale",
    age: 33,
    isAuth: true,
});
