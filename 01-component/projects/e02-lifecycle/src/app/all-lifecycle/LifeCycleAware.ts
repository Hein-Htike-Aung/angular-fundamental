import {
  Component,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

const list: string[] = [];

@Component({
  template: '',
})
export abstract class LifeCycleAware
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  abstract get component(): string;

  /* 
    constructor is No1 and then..
    Inits do only once after initailiztion
    Checks will be executed after every changes
    ngOnChanges will only be executed if the input value is changed
  */
  ngOnDestroy(): void {
    // shouldn't update data
    this.log('ngOnDestroy');
  }
  ngAfterViewChecked(): void {
    // shouldn't update data
    this.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    // shouldn't update data
    this.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }
  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.log('ngOnChanges');
    console.log(changes);
  }

  private log(eventMessage: string) {
    const message = `${new Date().toLocaleTimeString()} : 
    ${this.component.padEnd(8, ' ')} ${eventMessage}`;

    console.log(message);
    // list.push(message);
  }

  get logList() {
    return [...list];
  }
}
