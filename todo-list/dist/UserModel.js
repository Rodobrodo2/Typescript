"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
class UserModel {
    constructor(id, name, email) {
        this.todos = [];
        this.id = id;
        this.name = name;
        this.email = email;
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
}
exports.UserModel = UserModel;
