import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-test05',
  templateUrl: './provider-test05.component.html',
  providers: [
    {provide: 'locale', useValue: 'en-US'},
    {provide: 'taxRate', useValue: 20},
  ]
})
export class ProviderTest05Component implements OnInit {

  constructor(
    @Inject('locale') private locale: string,
    @Inject('taxRate') private taxRate: number,
  ) { }

  ngOnInit(): void {
    console.log(this.locale);
    console.log(this.taxRate);
  }

}
