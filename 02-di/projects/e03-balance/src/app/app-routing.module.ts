

import { HomeComponent } from './views/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceListComponent } from './views/balance-list/balance-list.component';
import { CategoryComponent } from './views/category/category.component';
import { BalanceEditComponent } from './views/balance-list/balance-edit/balance-edit.component';

const routes: Routes = [
  {path: 'balance/:type', children: [
    {path: ':id', component: BalanceEditComponent},
    {path: '', component: BalanceListComponent}
  ]},
  {path: 'home', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
