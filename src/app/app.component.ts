import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { AddPopupService } from './addPopup/add-popup-service.service';
import { AddPopupComponent } from './addPopup/add-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, AddPopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @Input() newEntry = '';
  constructor(private addPopupService: AddPopupService) { }
  todo_array: Array<string> = ['Task 1', 'Task 2'];

  clearToDo() {
    this.todo_array.splice(0);
  }

  openAddPopup() {
    this.addPopupService.openPopup();
  }

  removeToDo(index: number) {
    this.todo_array.splice(index, 1);
  }

  addNewEntry(entry: string) {
    this.todo_array.push(entry);
  }
}
