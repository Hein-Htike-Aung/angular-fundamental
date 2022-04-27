import { Component, Input, OnInit } from '@angular/core';
import { LifeCycleAware } from '../LifeCycleAware';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent extends LifeCycleAware {

  @Input()
  message?:string;

  get component(): string {
    return 'Child';
  }

}
