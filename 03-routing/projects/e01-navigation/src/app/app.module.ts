import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleLinkComponent } from './simple-link/simple-link.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NestedLinkComponent } from './nested-link/nested-link.component';
import { PassingParameterComponent } from './passing-parameter/passing-parameter.component';
import { PathComponent } from './passing-parameter/path/path.component';
import { QueryComponent } from './passing-parameter/query/query.component';
import { MatrixComponent } from './passing-parameter/matrix/matrix.component';
import { ResolveFromComponent } from './resolve/resolve-from/resolve-from.component';
import { ResolveToComponent } from './resolve/resolve-to/resolve-to.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleLinkComponent,
    PageNotFoundComponent,
    NestedLinkComponent,
    PassingParameterComponent,
    PathComponent,
    QueryComponent,
    MatrixComponent,
    ResolveFromComponent,
    ResolveToComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
