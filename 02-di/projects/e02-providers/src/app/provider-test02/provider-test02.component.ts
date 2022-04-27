import { StringStorageInter } from './../services/string-storage-inter';
import { Component, Inject, OnInit } from '@angular/core';
import { storage1, storage2 } from '../app.module';

@Component({
  selector: 'app-provider-test02',
  templateUrl: './provider-test02.component.html',
  styles: [
  ]
})
export class ProviderTest02Component implements OnInit {

  constructor(
    @Inject(storage2) private stringStorage: StringStorageInter
    // @Inject(storage1) private stringStorage: StringStorageInter
  ) { }

  ngOnInit(): void {
    console.log(this.stringStorage);
  }

}
