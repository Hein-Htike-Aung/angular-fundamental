import { ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { MmkPipePipe } from './pipes/mmk-pipe.pipe';
import { DecimalPipe } from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';

import { ErrorMessageDirective } from './custom-directives/error-message.directive';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    MmkPipePipe,
    DirectivesComponent,
    HighlightDirective,
    ErrorMessageDirective,
    CustomDirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DecimalPipe
  ],
  bootstrap: [AppComponent],
  exports: [
    MmkPipePipe
  ]
})
export class AppModule { }
