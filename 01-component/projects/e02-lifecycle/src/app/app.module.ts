import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllLifecycleComponent } from './all-lifecycle/all-lifecycle.component';
import { OnChangeComponent } from './on-change/on-change.component';
import { ChildComponent } from './all-lifecycle/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    AllLifecycleComponent,
    OnChangeComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
