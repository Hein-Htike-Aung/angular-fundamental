import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LifeCycleAware } from './LifeCycleAware';

@Component({
  templateUrl: './all-lifecycle.component.html',
  styles: [],
})
export class AllLifecycleComponent extends LifeCycleAware {
  get component(): string {
    return 'Parent';
  }
  message = 'Message form Parent Component';

  count = 0;

  getMessageForChild() {
    return `Message from Parent: count is:  ${this.count}`;
  }

  countUp(up: boolean) {
    if (up) {
      this.count++;
    } else {
      this.count--;
    }
  }
}
