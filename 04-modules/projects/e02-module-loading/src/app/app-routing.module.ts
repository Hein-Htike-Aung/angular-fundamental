import { SettingComponent } from './views/setting/setting.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  PreloadingStrategy,
  RouterModule,
  Routes,
} from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'setting', component: SettingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'transaction',
    loadChildren: () =>
      import('./modules/transaction/transaction.module').then(
        (m) => m.TransactionModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
