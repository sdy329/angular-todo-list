import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddPopupComponent } from './modules/addPopup/components/add-popup.component';
import { todoList } from './modules/todoList/models/todo-list.model';
import { EditPopupComponent } from './modules/editPopup/components/edit-popup.component';
import { Entry } from './modules/todoList/models/entry.model';

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
      if (result === undefined) {
        return;
      } else if (result.todoEntry) {
        const title = result.todoEntry;
        const date = result.dueDate;
        this.todoArray.addNewEntry(title, date);
      }
    });
  }

  openEditPopup(index: number, entry: Entry) {
    const dialogRef = this.dialog.open(EditPopupComponent, {
      data: entry
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined) {
        return;
      } else if (result.title) {
        this.todoArray.editEntry(index, result);
      }
    });
  }
}