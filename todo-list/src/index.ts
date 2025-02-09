import { Todo, User, TodoWithMetaData } from "./types";

const todos: Todo[] = [];
const users: User[] = [];

console.log("Lista Todo inizializzata", todos);
console.log("Lista User inizializzata", users);



// Funzione per aggiungere i todo
const addTodo = (title: string, metadata?: any): Todo => {
    const newTodo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        title, 
        completed: false,
        metadata, // Se metadata e fornito lo assegna al nuovo Todo
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

// Gestione degli errori con Never
const error = (message: string): never => {
    throw new Error(message);
};

try {
    error("Errore grosso")
} catch (e) {
    console.error("Errore preso:", e);
};


// Gestione dei Tipi Dinamici con Unknown
const parseInput =(input: unknown): string => {
    if (typeof input === "string") {
        return input;
    } else if (typeof input === "number") {
        return input.toLocaleString();
    } else {
        error("Input non valido");
        throw new Error("Questo codice non dovrebbe mai essere eseguito");
    };
};

try {
    console.log(parseInput("Ciao sono Redi"));
    console.log(parseInput(22));
    console.log(parseInput(true));
} catch (e) {
    console.error("Non e una stringa o un numero da trasformare in stringa", e);
};

// Utilizzare il tipo any, aggiunto ad addTodo , qui facciamo il test di addTodo con metadata
console.log(addTodo("Comprare le mele", {priority: "high", dueDate: "2024" }));
console.log("Lista aggiornata dei Todo:", todos);

// Funzione per aggiungere un todo con metadata
const addTodoWithMetadata = (title: string, metadata: any): TodoWithMetaData => {
    const newTodo: TodoWithMetaData  ={
        id: todos.length > 0 ? todos [todos.length - 1].id + 1 : 1,
        title,
        completed: false,
        metadata,
    };

    todos.push(newTodo);
    return newTodo;
};

console.log(addTodoWithMetadata("Fare la spesa", { priority: "high,", dueDate: "2024"}));
console.log("Lista aggiornata dei Todo:", todos);