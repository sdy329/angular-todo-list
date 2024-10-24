import { Entry } from './entry.model';
import { v4 as uuidv4 } from 'uuid';

export class todoList implements Entry {
    id: string;
    title: string;
    date: Date;
    array: Array<Entry>;

    constructor() {
        this.id = uuidv4();
        this.title = 'Test';
        this.date = new Date();
        this.array = [{ id: this.id, title: this.title + 1, date: this.date }, { id: this.id, title: this.title + 2, date: this.date }];
    }

    clearToDo() {
        this.array.splice(0);
    }

    removeToDo(index: number) {
        this.array.splice(index, 1);
    }

    addNewEntry(title: string, date: Date) {
        this.array.push({ id: uuidv4(), title: title, date: date });
    }

    getToDoList() {
        return this.array;
    }
}