import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddPopupComponent } from './addPopup/add-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todo_array: Array<string> = ['Task 1', 'Task 2'];

  constructor(private dialog: MatDialog) { }

  clearToDo() {
    this.todo_array.splice(0);
  }

  removeToDo(index: number) {
    this.todo_array.splice(index, 1);
  }

  addNewEntry(entry: string) {
    this.todo_array.push(entry);
  }

  openAddPopup() {
    const dialogRef = this.dialog.open(AddPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addNewEntry(result);
      }
    });
  }
}