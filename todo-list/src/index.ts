import { Todo, User, TodoWithMetaData, Project } from "./types";

const todos: Todo[] = [];
const users: User[] = [];
const projects: Project[] = [];

console.log("Lista Todo inizializzata", todos);
console.log("Lista User inizializzata", users);



// Funzione per aggiungere i todo
const addTodo = (title: string, metadata?: string | object): Todo => {
    const newTodo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        title,
        completed: false,
        metadata, // Metadata puo essere una stringa o unoggetto
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

    if (!todo) {
        return `Errore: Il Todo con ID ${todoId} non esiste.`
    }
    if (!user) {
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
console.log("Lista aggiornata dei Todo:", todos);
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
const parseInput = (input: unknown): string => {
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
console.log(addTodo("Comprare le mele", { priority: "high", dueDate: "2024" }));
console.log("Lista aggiornata dei Todo:", todos);

// Funzione per aggiungere un todo con metadata
const addTodoWithMetadata = (title: string, metadata: any): TodoWithMetaData => {
    const newTodo: TodoWithMetaData = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        title,
        completed: false,
        metadata,
    };

    todos.push(newTodo);
    return newTodo;
};

console.log(addTodoWithMetadata("Fare la spesa", { priority: "high,", dueDate: "2024" }));
console.log("Lista aggiornata dei Todo:", todos);

// Test di vari tipi di metadata
console.log(addTodo("Fare i compiti", "Priorità alta")); // metadata stringa
console.log(addTodo("Pulire la casa", { priority: "high", dueDate: "2024-02-10" })); // Metadata come oggetto
console.log("Lista aggiornata dei Todo:", todos);

// Tipo utility partial
const updatedTodo = (id: number, updates: Partial<Todo>): Todo | string => {
    const todoIndex = todos.findIndex(todo => todo.id === id);

    if (todoIndex === -1) {
        return `Errore: Nessun todo trovatocon ID ${id}`;
    }

    todos[todoIndex] = { ...todos[todoIndex], ...updates };
    return todos[todoIndex];
}; // test

const todo3 = addTodo("Comprare il deodorante", { priority: "high" });
console.log("Todo aggiunto:", todo3);

console.log("Aggiornamento titolo:", updatedTodo(todo3.id, { title: "Comprare il pane" }));
console.log("Segnare come completato:", updatedTodo(todo3.id, { completed: true }));
console.log("Aggiungere metadata extra:", updatedTodo(todo3.id, { metadata: { category: "spesa" } }));

console.log("Lista aggiornata dei Todo:", todos);

// Utilizzare Array Readonly (aggiunto all'interfaccia user)
const user2: User = {
    id: 1,
    name: "Mario Rossi",
    email: "mario@example.com",
    todos: [
        { id: 1, title: "Comprare il latte", completed: false, userId: 1 },
        { id: 2, title: "Leggere un libro", completed: true, userId: 1 },
    ],
};

console.log("Utente con todos:", user1);
// Se provassimo a cambiare qualcosa in user2(nei todo che sono solo readonly) ci sarebbe un errore.

// Utilizzare tupla, Funzione per ottenere il riepilogo di un Todo
const getTodoSummary = (todo: Todo): [string, boolean] => {
    return [todo.title, todo.completed];
}; // Test

console.log("Summary Todo 1:", getTodoSummary(todo1)); // Output: ["Comprare il latte", false]
console.log("Summary Todo 2:", getTodoSummary(todo2)); // Output: ["Leggere un libro", false]

// Funzione per creare un nuovo progetto
const createProject = (name: string, users: User[], todos: Todo[]): Project => {
    const newProject: Project = {
        id: projects.length > 0 ? projects[projects.length - 1].id + 1 : 1,
        name,
        users,
        todos,
    };

    projects.push(newProject);
    return newProject;
}; // Test funzione

const user6: User = { id: 6, name: "Mario Rossi", email: "mario@example.com", todos: [] };
const user7: User = { id: 7, name: "Luca Bianchi", email: "luca@example.com", todos: [] };

const todo6: Todo = { id: 6, title: "Comprare la pasta", completed: false, userId: 6 };
const todo7: Todo = { id: 7, title: "Leggere un libro", completed: false, userId: 7 };

const project1 = createProject("Progetto Sviluppo", [user6, user7], [todo6, todo7]);

console.log("Nuovo progetto creato:", project1);
console.log("Lista progetti:", projects);

