import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPopupComponent } from './add-popup.component';

@Injectable({
  providedIn: 'root'
})
export class AddPopupService {

  constructor(private dialog: MatDialog) { }

  openPopup() {
    this.dialog.open(AddPopupComponent);
  }

  closePopup() {
    this.dialog.closeAll();
  }
}
