import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuOneComponent } from './sidebar/side-menu-one/side-menu-one.component';
import { SideMenuTwoComponent } from './sidebar/side-menu-two/side-menu-two.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuOneComponent,
    SideMenuTwoComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
