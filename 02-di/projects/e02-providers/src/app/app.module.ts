import { StringStorageInter } from './services/string-storage-inter';
import { StringStorage2 } from './services/string-storage02';
import { StringStorage1 } from './services/string-storage01';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderTest01Component } from './provider-test01/provider-test01.component';
import { ProviderTest02Component } from './provider-test02/provider-test02.component';
import { getLocaleCurrencyCode } from '@angular/common';
import { ProviderTest03Component } from './provider-test03/provider-test03.component';
import { ProviderTest04Component } from './provider-test04/provider-test04.component';
import { ProviderTest05Component } from './provider-test05/provider-test05.component';
import { ProviderTest06Component } from './provider-test06/provider-test06.component';
import { ProviderTest07Component } from './provider-test07/provider-test07.component';

/* useClass */
export const storage1 = new InjectionToken('storage');
export const storage2 = new InjectionToken('storage2');

/* useValue */
const valueStorage:StringStorageInter = {
  innerList: [],
  add(value: string) {
    this.innerList.push(value);
  },
  getAll(): string[] {
    return this.innerList;
  }
}

/* useFactory */
const getStorage = ():StringStorageInter => {
  const obj = new StringStorage1();
  obj.add('angular');
  obj.add('Typescript');
  obj.add('JavaScript');
  return obj;
}

@NgModule({
  declarations: [
    AppComponent,
    ProviderTest01Component,
    ProviderTest02Component,
    ProviderTest03Component,
    ProviderTest04Component,
    ProviderTest05Component,
    ProviderTest06Component,
    ProviderTest07Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: storage1, useClass: StringStorage1},
    {provide: storage2, useClass: StringStorage2},
    // {provide: 'storage1', useClass: StringStorage1},
    // {provide: 'storage2', useClass: StringStorage2},
    {provide: 1, useValue: valueStorage},
    {provide: 2, useFactory: getStorage},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
