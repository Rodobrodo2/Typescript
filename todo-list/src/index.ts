import { Todo, User } from "./types";

const todos: Todo[] = [];
const users: User[] = [];

console.log("Lista Todo inizializzata", todos);
console.log("Lista User inizializzata", users);



// Funzione per aggiungere i todo
const addTodo = (title: string) => {
    const newTodo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1, title, completed: false,
    };
    
    todos.push(newTodo);
    return newTodo;
};

console.log("Aggiunta Todo:", addTodo("Typescript magic"));
console.log("Lista aggiornata:", todos);

// Associare Todo con Utenti
// Funzione per aggiungere un user
const addUser = (name: string, email?: string): User => {
    const newUser: User = {
        id: users.length > 0 ? users[users.length - 1].id + 1 : 1, name, email,
    };

    users.push(newUser);
    return newUser;
};

// Funzione per assegnare un Todo a un User
const assignTodoToUser = (todoId: number, userId: number): string => {
    const todo = todos.find((t) => t.id === todoId);
    const user = users.find((u) => u.id === userId);

    if(!todo) {
        return `Errore: Il Todo con ID ${todoId} non esiste.`
    }
    if(!user) {
        return `Errore: L'utente con ID ${userId} non esiste.`
    }

    todo.userId = userId;
    return `Todo con ID ${todoId} assegnato all'utente con ID ${userId}.`;
};

// Funzione per ottenere tutti i Todo di un utente
const getUserTodos = (userId: number): Todo[] => {
    return todos.filter((todo) => todo.userId === userId);
}


// Test delle Funzioni
const user1 = addUser("Mario Rossi", "mario23@example.com");
const todo1 = addTodo("Compra il latte");
const todo2 = addTodo("Fare la spesa");

console.log(assignTodoToUser(todo1.id, user1.id)); // Assegna il todo all utente
console.log(assignTodoToUser(todo2.id, user1.id));
console.log("Lista aggiornata dei Todo:",todos);
console.log("Lista degli utenti:", users);
console.log(`Tutti i Todo di ${user1.name}:`, getUserTodos(user1.id));