import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styles: [
  ]
})
export class EventsComponent {

  from = ['javascript', 'typescript', 'angular'];

  to:string[] = [];

  dragValue = '';

  drag(value: string) {
    this.dragValue = value;
  }

  drop(event:any) {
    if(event.target.id == 'to'){
      this.to.push(this.dragValue);
      this.from = this.from.filter(i => i !== this.dragValue); 
    }
    if(event.target.id == 'from'){
      this.from.push(this.dragValue);
      this.to = this.to.filter(i => i !== this.dragValue); 
    }
  }

}
