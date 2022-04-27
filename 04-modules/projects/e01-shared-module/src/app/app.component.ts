import { ModalDialogComponent } from './utilities/app-commons/modal-dialog/modal-dialog.component';
import { Component, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  @ViewChild(ModalDialogComponent)
  dialog?: ModalDialogComponent

  showModalDialog() {
    this.dialog?.open();
  }  

}
