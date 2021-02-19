import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button>
      Basic

      <mat-icon>more_vert</mat-icon>
    </button>

    <mat-checkbox>Click Me!</mat-checkbox>

  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
