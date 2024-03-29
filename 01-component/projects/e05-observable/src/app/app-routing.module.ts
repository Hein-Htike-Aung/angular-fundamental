import { ValueChangesComponent } from './value-changes/value-changes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  {path:'', component: ObservableComponent},
  {path: 'valeChanges', component: ValueChangesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
