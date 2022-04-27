import { SideMenuTwoComponent } from './sidebar/side-menu-two/side-menu-two.component';
import { SideMenuOneComponent } from './sidebar/side-menu-one/side-menu-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'page-one', component: PageOneComponent },
  { path: 'page-two', component: PageTwoComponent },
  {
    path: '',
    redirectTo: '/page-one(sideMenu:side-menu-one)',
    pathMatch: 'full',
  },

  {
    path: 'side-menu-one',
    component: SideMenuOneComponent,
    outlet: 'sideMenu',
  },
  {
    path: 'side-menu-two',
    component: SideMenuTwoComponent,
    outlet: 'sideMenu',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
