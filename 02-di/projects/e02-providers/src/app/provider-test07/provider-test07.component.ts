import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-test07',
  templateUrl: './provider-test07.component.html',
  providers: [
    {provide: 'LOCALE', useValue: 'en-US', multi: true},
    {provide: 'LOCALE', useValue: 'ja-JP', multi: true},
    {provide: 'LOCALE', useValue: 'my-MM', multi: true},
  ]
})
export class ProviderTest07Component implements OnInit {

  constructor(
    @Inject('LOCALE') private locales: string[],
  ) { }

  ngOnInit(): void {
    console.log(this.locales);
  }

}
