import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberCrudComponent } from './member-crud/member-crud.component';
import { MemberEditComponent } from './member-crud/member-edit/member-edit.component';
import { MemberDetailsComponent } from './member-crud/member-details/member-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberCrudComponent,
    MemberEditComponent,
    MemberDetailsComponent
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
