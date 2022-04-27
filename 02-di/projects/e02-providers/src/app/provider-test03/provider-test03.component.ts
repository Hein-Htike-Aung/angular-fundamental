import { StringStorageInter } from './../services/string-storage-inter';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-test03',
  templateUrl: './provider-test03.component.html',
  styles: [
  ]
})
export class ProviderTest03Component implements OnInit {

  constructor(
    @Inject(1) private stringStorage: StringStorageInter
  ) { }

  ngOnInit(): void {
    console.log(this.stringStorage);
  }

}
