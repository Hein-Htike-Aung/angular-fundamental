import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SimpleFormComponent } from './template-form/simple-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: SimpleFormComponent},
  {path: 'reactive', component: ReactiveFormComponent},
  {path: 'validations', component: ReactiveFormValidationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
