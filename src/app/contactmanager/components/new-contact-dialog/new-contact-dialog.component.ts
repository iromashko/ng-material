import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss'],
})
export class NewContactDialogComponent implements OnInit {
  user: User;
  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
  name = new FormControl('', [Validators.required]);

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>) {}

  ngOnInit(): void {
    this.user = new User();
  }

  save(): void {
    this.user.name = this.name.value;
    this.dialogRef.close(this.user);
  }

  dismiss(): void {
    this.dialogRef.close(null);
  }

  getErrorMessage() {
    return this.name.hasError('required') ? 'Name required' : '';
  }
}
