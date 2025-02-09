export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    userId?: number,
    metadata?: string | object
};

export interface User {
    id: number,
    name: string,
    email?: string,
};

export interface TodoWithMetaData extends Todo {
    metadata: any;
}