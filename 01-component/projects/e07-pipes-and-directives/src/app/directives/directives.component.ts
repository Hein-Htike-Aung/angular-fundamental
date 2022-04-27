import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: [
  ]
})
export class DirectivesComponent {

  show = true;

  list = ['One', 'Two', 'Three', 'Four'];

  constructor() { }

}
