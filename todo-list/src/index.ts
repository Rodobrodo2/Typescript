// string - number - boolean
const myName: string = "Redi";
const myAge: number = 25;
const isAuth: boolean = true;

// Oggetti
const user: { name: string, age: number, isAuth: boolean } = {
    name: "Alessandra",
    age: 33,
    isAuth: true
};

// Types
type CustomArray = (string | number | null)[];

// Interface
interface User {
    name: string,
    age: number, 
    isAuth: boolean
}

// Array
const array: CustomArray = ["blue", "red", "green", "yellow", 34, 45, null];

// Funzioni
const myFunction = (array: (string | number | null)[], obj: { name: string, age: number, isAuth: boolean }): void => {
    console.log(array, obj);
};

myFunction(array, user);

// Types - interface - optionals
const printArray = (arr: CustomArray, obj: User) => {
    console.log(arr, obj)
}

printArray(array, {
    name: "ale",
    age: 33,
    isAuth: true,
});

import { Todo } from "./types";

const todos: Todo[] = [];
console.log("Lista Todo inizializzata", todos);