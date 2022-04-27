import { StringStorageInter } from './../services/string-storage-inter';
import { StringStorage1 } from './../services/string-storage01';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-test06',
  templateUrl: './provider-test06.component.html',
  providers: [
    StringStorage1,
    {provide: 'stringStorage', useExisting: StringStorage1},
  ]
})
export class ProviderTest06Component implements OnInit {

  constructor(
    @Inject('stringStorage') private stringStorage: StringStorageInter
  ) { }

  ngOnInit(): void {
    console.log(this.stringStorage);
  }

}
