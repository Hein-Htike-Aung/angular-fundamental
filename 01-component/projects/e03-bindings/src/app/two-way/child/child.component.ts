import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'two-way-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent {

  // variable names are sensitive
  @Input()
  value = ''

  @Output()
  valueChange = new EventEmitter()
}
