import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styles: [
  ]
})
export class ModalDialogComponent {

  constructor() { }

  close() {
    $('.modal').css('display', 'none');
  }

  open() {
    $('.modal').css('display', 'block');
  }
}
