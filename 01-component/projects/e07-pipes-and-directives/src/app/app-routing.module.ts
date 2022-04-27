import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'pipes', component: PipesComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'cus-directives', component: CustomDirectivesComponent},
  {path: '', redirectTo: 'pipes', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
