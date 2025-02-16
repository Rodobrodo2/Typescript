import { Todo } from "./types";

// Filtrare qualsiasi tipo di array (type generic)
export const filterTodos = <T>(items: T[], filterFn: (item: T) => boolean): T[] => {
    return items.filter(filterFn);
};

// Type mappato, ha trasformato ogni proprieta dell'oggetto todo in opzionale, Partial<Todo> crea una nuova versione dell'interfaccia Todo.
export type PartialTodo = Partial<Todo>;

// Funzionce che aggiorna solo le proprieta richieste
export const updatePartialTodo = (todoId: number, updates: PartialTodo, todos: Todo[]): string => {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);

    if (todoIndex === -1) {
        return `Errore: Nessun Todo trovato con ID ${todoId}`;
    }

    todos[todoIndex] = { ...todos[todoIndex], ...updates };
    return `Todo con ID ${todoId} aggiornato con successo.`
};

// Type Record => rappresenta un oggetto in cui le chiavi sono numeri e i valori sono oggetti Todo
export type TodoRecord = Record<number, Todo>;

// Funzione che accetta un array di todo e restituisce un oggetto di tipo TodoRecord. Trasforma un array di todo in un oggetto di tipo TodoRecord
export const convertArrayToRecord = (todos: Todo[]): TodoRecord => {
    return todos.reduce<TodoRecord>((acc, todo) => {
        acc[todo.id] = todo;
        return acc;
    }, {});
};