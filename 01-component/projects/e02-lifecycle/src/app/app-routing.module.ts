import { OnChangeComponent } from './on-change/on-change.component';
import { AllLifecycleComponent } from './all-lifecycle/all-lifecycle.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: AllLifecycleComponent},
  {path: "on-change", component: OnChangeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
