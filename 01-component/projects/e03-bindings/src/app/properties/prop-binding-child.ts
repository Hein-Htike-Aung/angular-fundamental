import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-prop-child',
  template: `
        <ul style="display: flex;">
            <li *ngFor="let item of list">{{ item }}</li>
        </ul>
  
  `,
})
export class PropBindingChild {

    list: string[] = [];

    @Input()
    set keyword(value: string) {
        if(value) {
            this.list.push(value);
        }
    }

}
