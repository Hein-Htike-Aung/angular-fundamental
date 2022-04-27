import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styles: [
  ]
})
export class ModalDialogComponent {

  @Input()
  title?:string;
  @Input()
  disableButton = true;
  @Output()
  submitButton = new EventEmitter();


  constructor() { }

  close() {
    $('.modal').css('display', 'none');
  }

  open() {
    $('.modal').css('display', 'block');
  }

  submit() {
    this.submitButton.emit(true);
  }
}
