import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Entry } from '../../todoList/models/entry.model';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.css'
})
export class EditPopupComponent {

  todoForm: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EditPopupComponent>, @Inject(MAT_DIALOG_DATA) entry: Entry) {
    const formattedDate = entry.date ? new Date(entry.date).toISOString().slice(0, 16) : '';

    this.todoForm = this.fb.group({
      title: [entry.title, Validators.required],
      date: [formattedDate, [Validators.required]]
    })
  }


  onSubmit() {
    this.closePopup();
  }

  closePopup() {
    this.dialogRef.close(this.todoForm.value);
  }
}
