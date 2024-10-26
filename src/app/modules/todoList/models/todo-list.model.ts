import { Entry } from './entry.model';

export class todoList implements Entry {
    title: string;
    date: Date;
    array: Array<Entry>;

    constructor() {
        this.title = 'Test';
        this.date = new Date();
        this.array = [{ title: this.title + 1, date: this.date }, { title: this.title + 2, date: this.date }];
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