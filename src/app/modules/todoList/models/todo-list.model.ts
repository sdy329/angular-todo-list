export class todoList {
    array: Array<string> = ['Task 1', 'Task 2'];
    constructor() { }

    clearToDo() {
        this.array.splice(0);
    }

    removeToDo(index: number) {
        this.array.splice(index, 1);
    }

    addNewEntry(entry: string) {
        this.array.push(entry);
    }

    getToDoList() {
        return this.array;
    }
}