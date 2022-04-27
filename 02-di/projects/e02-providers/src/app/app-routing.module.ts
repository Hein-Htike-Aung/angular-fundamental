import { ProviderTest07Component } from './provider-test07/provider-test07.component';
import { ProviderTest06Component } from './provider-test06/provider-test06.component';
import { ProviderTest05Component } from './provider-test05/provider-test05.component';
import { ProviderTest04Component } from './provider-test04/provider-test04.component';
import { ProviderTest03Component } from './provider-test03/provider-test03.component';
import { ProviderTest02Component } from './provider-test02/provider-test02.component';
import { ProviderTest01Component } from './provider-test01/provider-test01.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'providerTest01', component: ProviderTest01Component},
  {path: 'providerTest02', component: ProviderTest02Component},
  {path: 'providerTest03', component: ProviderTest03Component},
  {path: 'providerTest04', component: ProviderTest04Component},
  {path: 'providerTest05', component: ProviderTest05Component},
  {path: 'providerTest06', component: ProviderTest06Component},
  {path: 'providerTest07', component: ProviderTest07Component},
  {path: '', redirectTo: 'providerTest01', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
