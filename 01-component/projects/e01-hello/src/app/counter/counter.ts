import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.html',
  styleUrls: ['counter.css'],
})
export class CounterComponent {
  count = 0;

  countUp() {
    this.count++;
  }

  countDown() {
    this.count--; 
  }
}
