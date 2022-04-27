import { DatePipe } from '@angular/common';
import { BalanceService } from './services/balance.service';
import { CategoryService } from './services/category.service';

import { NgModule, InjectionToken } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './views/home/home.component';
import { BalanceListComponent } from './views/balance-list/balance-list.component';
import { CategoryComponent } from './views/category/category.component';
import { NavbarComponent } from './widgets/navbar/navbar.component';
import { SearchBarComponent } from './widgets/search-bar/search-bar.component';
import { CategoryEditComponent } from './views/category/category-edit/category-edit.component';
import { IdGeneratorService } from './services/id-generator.service';
import { BalanceEditComponent } from './views/balance-list/balance-edit/balance-edit.component';

export const STORAGE_SERVICE = new InjectionToken('STORAGE_SERVICE');

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    BalanceEditComponent,
    BalanceListComponent,
    HomeComponent,
    NavbarComponent,
    SearchBarComponent,
    CategoryEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    {provide: STORAGE_SERVICE , useExisting: CategoryService, multi: true},
    {provide: STORAGE_SERVICE , useExisting: BalanceService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
