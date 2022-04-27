import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueChangesComponent } from './value-changes/value-changes.component';
import { ObservableComponent } from './observable/observable.component';


@NgModule({
  declarations: [
    AppComponent,
    ValueChangesComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
