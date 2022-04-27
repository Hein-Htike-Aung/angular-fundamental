import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent {

  name = 'Xiaoting';

  price = 45600;
  strPrice = '45600';

  percent1 = 99;
  percent2 = 183;
  percent3 = 0.3434;

  date = new Date();

  constructor() { }

}
