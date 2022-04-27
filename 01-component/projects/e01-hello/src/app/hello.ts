import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h2>Hello Angular</h2>
    <p>{{ message }}</p>
  `,
  styles: [
    `
      h2 {
        color: blue;
      }
    `,
  ],
})
export class HelloComponent {
  message = 'First Message';
}
