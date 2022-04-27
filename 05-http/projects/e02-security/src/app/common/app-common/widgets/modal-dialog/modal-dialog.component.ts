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
  title?: string;
  @Input()
  disableSubmitButton?: boolean;

  @Output()
  submitButton = new EventEmitter();

  constructor() { }

  open() {
    $('.modal').css('display', 'block');
  }

  close() {
    $('.modal').css('display', 'none');
  }

  submit() {
    this.submitButton.emit(true);
  }
}
