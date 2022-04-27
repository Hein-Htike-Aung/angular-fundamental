import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDialogComponent } from './widgets/modal-dialog/modal-dialog.component';
import { DaysPipe } from './pipes/days.pipe';
import { TimesPipe } from './pipes/times.pipe';



@NgModule({
  declarations: [
    ModalDialogComponent,
    DaysPipe,
    TimesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalDialogComponent,
    DaysPipe,
    TimesPipe
  ]
})
export class AppCommonModule { }
