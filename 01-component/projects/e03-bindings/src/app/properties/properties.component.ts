import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './properties.component.html',
  styles: [],
})
export class PropertiesComponent {

  /* Dom Property Binding */
  btnShow = false;

  value = '';
  
  switchBtnState() {
    this.btnShow = !this.btnShow;
  }

  /* Component Property Binding */
  parentValue = '';

  setKeyword(inputValue: string) {
      this.parentValue = inputValue;
  }

  /* Directive Property Binding */
  background = '';

}
