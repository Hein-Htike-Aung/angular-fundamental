import { TransactionModule } from './modules/transaction/transaction.module';
import { MasterModule } from './modules/master/master.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SettingComponent } from './views/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
