import { Entry } from './entry.model';

export class todoList implements Entry {
    title: string;
    date: Date;
    array: Array<Entry>;
    // 2024-10-31T13:19
    constructor() {
        this.title = 'Test';
        this.date = new Date();
        this.array = [{ title: 'Test', date: new Date() }];
    }

    clearToDo() {
        this.array.splice(0);
    }

    removeToDo(index: number) {
        this.array.splice(index, 1);
    }

    addNewEntry(title: string, date: Date) {
        this.array.push({ title: title, date: date });
    }

    getToDoList() {
        return this.array;
    }
}