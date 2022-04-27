
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'master',
    loadChildren: () =>
      import('./domain/master/master.module').then((m) => m.MasterModule),
  },
  { path: '', redirectTo: '/master/course', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
