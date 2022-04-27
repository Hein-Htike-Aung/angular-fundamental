import { StringStorageInter } from './../services/string-storage-inter';
import { Component, Inject, OnInit } from '@angular/core';
import { storage1, storage2 } from '../app.module';

@Component({
  selector: 'app-provider-test01',
  templateUrl: './provider-test01.component.html',
  styles: [
  ]
})
export class ProviderTest01Component implements OnInit {

  constructor(
    @Inject(storage1) private stringStorage: StringStorageInter
    // @Inject(storage2) private stringStorage: StringStorageInter
  ) { }

  ngOnInit(): void {
    console.log(this.stringStorage);
  }

}
