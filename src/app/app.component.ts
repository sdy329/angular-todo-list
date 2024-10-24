import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddPopupComponent } from './modules/addPopup/components/add-popup.component';
import { todoList } from './modules/todoList/models/todo-list.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoArray: todoList;

  constructor(private dialog: MatDialog) {
    this.todoArray = new todoList();
  }

  openAddPopup() {
    const dialogRef = this.dialog.open(AddPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const title = result.todoEntry;
        const date = result.dueDate;
        this.todoArray.addNewEntry(title, date);
      }
    });
  }
}