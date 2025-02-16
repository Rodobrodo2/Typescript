"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertArrayToRecord = exports.updatePartialTodo = exports.filterTodos = void 0;
// Filtrare qualsiasi tipo di array (type generic)
const filterTodos = (items, filterFn) => {
    return items.filter(filterFn);
};
exports.filterTodos = filterTodos;
// Funzionce che aggiorna solo le proprieta richieste
const updatePartialTodo = (todoId, updates, todos) => {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex === -1) {
        return `Errore: Nessun Todo trovato con ID ${todoId}`;
    }
    todos[todoIndex] = Object.assign(Object.assign({}, todos[todoIndex]), updates);
    return `Todo con ID ${todoId} aggiornato con successo.`;
};
exports.updatePartialTodo = updatePartialTodo;
// Funzione che accetta un array di todo e restituisce un oggetto di tipo TodoRecord. Trasforma un array di todo in un oggetto di tipo TodoRecord
const convertArrayToRecord = (todos) => {
    return todos.reduce((acc, todo) => {
        acc[todo.id] = todo;
        return acc;
    }, {});
};
exports.convertArrayToRecord = convertArrayToRecord;
