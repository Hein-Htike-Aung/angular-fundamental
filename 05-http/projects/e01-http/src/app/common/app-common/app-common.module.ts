import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DaysPipe } from './pipe/days.pipe';
import { ModalDialogComponent } from './widget/modal-dialog/modal-dialog.component';



@NgModule({
  declarations: [
    ModalDialogComponent,
    DaysPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalDialogComponent,
    DaysPipe
  ]
})
export class AppCommonModule { }
