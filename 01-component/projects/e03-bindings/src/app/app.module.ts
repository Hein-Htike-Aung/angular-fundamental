import { PropBindingChild } from './properties/prop-binding-child';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertiesComponent } from './properties/properties.component';
import { BackgroundDirective } from './properties/background.directive';
import { AttributesComponent } from './attributes/attributes.component';
import { EventsComponent } from './events/events.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { ChildComponent } from './two-way/child/child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertiesComponent,
    PropBindingChild,
    BackgroundDirective,
    AttributesComponent,
    EventsComponent,
    TwoWayComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    BackgroundDirective
  ]
})
export class AppModule { }
