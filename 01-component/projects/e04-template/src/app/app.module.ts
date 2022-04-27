import { StudentModel } from './template-form/student.model';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './template-form/simple-form.component';
import { PhoneValidatorDirective } from './validators/phone-validator.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';

@NgModule({
  declarations: [	
    AppComponent,
    SimpleFormComponent,
    PhoneValidatorDirective,
    ReactiveFormComponent,
    ReactiveFormValidationComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Template Driven Form
    ReactiveFormsModule // Reactive Form
  ],
  providers: [
    StudentModel // For Injection
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
