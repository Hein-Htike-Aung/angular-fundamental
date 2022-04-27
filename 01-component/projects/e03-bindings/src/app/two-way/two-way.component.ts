import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styles: [
  ]
})
export class TwoWayComponent {

  /* Two Way Data binding */
  parentValue = '';

  valueFromChild(value: string) {
    this.parentValue = value;
  }

  /* Using FormsModule */
  formValue = '';
}
