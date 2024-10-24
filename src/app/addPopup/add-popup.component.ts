import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddPopupService } from './add-popup-service.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-popup.component.html',
  styleUrl: './add-popup.component.css'
})
export class AddPopupComponent {
  @Output() newEntry = new EventEmitter<string>();

  todoForm = new FormGroup({
    todoEntry: new FormControl('', Validators.required)
  });

  constructor(private addPopupService: AddPopupService) { }


  addEntry() {
    const entry = this.todoForm.value.todoEntry?.toString();
    if (entry) {
      this.newEntry.emit(entry);
      this.closePopup();
    }
  }

  closePopup() {
    this.addPopupService.closePopup();
  }
}
