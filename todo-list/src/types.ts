export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    userId?: number,
    metadata?: string | object
    status?: TodoStatus
};

export interface User {
    id: number,
    name: string,
    email?: string,
    readonly todos?: ReadonlyArray<Todo>;
};

export interface TodoWithMetaData extends Todo {
    metadata: any;
}

export interface Project {
    id: number;
    name: string;
    users: User[];
    todos: Todo[];
};

export enum TodoStatus {
    Pending = "Pending",
    InProgress = "In progress",
    Completed = "Completed"
}
