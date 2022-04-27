import { StringStorageInter } from './../services/string-storage-inter';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-test04',
  templateUrl: './provider-test04.component.html',
  styles: [
  ]
})
export class ProviderTest04Component implements OnInit {

  constructor(
    @Inject(2) private stringStorage: StringStorageInter
  ) { }

  ngOnInit(): void {
    console.log(this.stringStorage);
  }

}
