import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from '../../domain/security/forbidden/forbidden.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'forbidden', component: ForbiddenComponent },
      { path: '', redirectTo: '/public/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
