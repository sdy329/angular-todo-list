import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todo_array: Array<string> = ['Task 1', 'Task 2'];

  clearToDo() {
    this.todo_array.splice(0);
  }

  addToDo() {
    this.todo_array.push('Task ' + (this.todo_array.length + 1));
  }

  removeToDo(index: number) {
    this.todo_array.splice(index, 1);
  }
}
