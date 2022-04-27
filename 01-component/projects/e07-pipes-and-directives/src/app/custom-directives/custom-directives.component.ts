import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './custom-directives.component.html',
  styles: [
  ]
})
export class CustomDirectivesComponent {

  form: FormGroup

  constructor(
    private builder: FormBuilder
  ) { 
    this.form = builder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  save() {
    console.log(this.form.value);
  }

}
