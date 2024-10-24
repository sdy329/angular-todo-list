import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-popup.component.html',
  styleUrl: './add-popup.component.css'
})
export class AddPopupComponent {

  todoForm: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddPopupComponent>) {
    this.todoForm = this.fb.group({
      todoEntry: ['', Validators.required],
      dueDate: ['', [Validators.required]]
    })
  }


  onSubmit() {
    this.closePopup();
  }

  closePopup() {
    this.dialogRef.close(this.todoForm.value);
  }
}
