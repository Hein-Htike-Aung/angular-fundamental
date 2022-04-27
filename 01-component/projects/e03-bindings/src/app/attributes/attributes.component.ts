import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styles: [
  ]
})
export class AttributesComponent {

  /* Attributes Binding (Non dom Property) */
  min = 0;
  max = 200;
  now = 25;

  /* Class Binding */
  multiClass = {
    'bg-primary': true,
    'bg-info': false,
  }

  bgDanger = true; 
  bgSuccess = false;
  
  backgroundColor = 'bg-light';
  showText = false;

  /* Style Binding */
  textSize = '10';

  textStyle = {
    'border': '1px solid #ccc',
    'background': '#333',
    'color': '#fff'
  }

  changeTextSize (value: string) {
    this.textSize = value;
  }

}
