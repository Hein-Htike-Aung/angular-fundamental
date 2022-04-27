import { MemberDetailsComponent } from './member-crud/member-details/member-details.component';
import { MemberEditComponent } from './member-crud/member-edit/member-edit.component';
import { MemberCrudComponent } from './member-crud/member-crud.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'member', component: MemberCrudComponent},
  {path: 'member/:id/edit', component: MemberEditComponent},
  {path: 'member/:id/details', component: MemberDetailsComponent},
  {path: '', redirectTo: '/member', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
