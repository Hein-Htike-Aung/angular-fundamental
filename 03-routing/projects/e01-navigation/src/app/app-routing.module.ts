import { ResolveToComponent } from './resolve/resolve-to/resolve-to.component';
import { ResolveFromComponent } from './resolve/resolve-from/resolve-from.component';
import { QueryComponent } from './passing-parameter/query/query.component';
import { PathComponent } from './passing-parameter/path/path.component';
import { MatrixComponent } from './passing-parameter/matrix/matrix.component';
import { PassingParameterComponent } from './passing-parameter/passing-parameter.component';
import { NestedLinkComponent } from './nested-link/nested-link.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimpleLinkComponent } from './simple-link/simple-link.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DATA, PersonResolver } from './resolve/person.resolver';


const routes: Routes = [
  { path: 'simple-link', component: SimpleLinkComponent },
  {
    path: 'nested-link',
    children: [
      { path: 'nested', component: NestedLinkComponent },
      { path: '', redirectTo: 'nested', pathMatch: 'full'}
    ],
  },
  {
    path: 'passing-params',
    component: PassingParameterComponent,
    children: [
      { path: 'path/:id/test/:type', component: PathComponent },
      { path: 'matrix', component: MatrixComponent },
      { path: 'query', component: QueryComponent },
      { path: '', redirectTo: 'matrix', pathMatch: 'full' },
    ],
  },
  { path: 'resolve', children: [
    {path: 'from', component: ResolveFromComponent, data: {list: DATA}},
    {path: 'to/:id', component: ResolveToComponent, resolve: {person: PersonResolver}},
    {path: '', redirectTo: 'from', pathMatch: 'full'}
  ]},
  { path: '', redirectTo: '/simple-link', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
