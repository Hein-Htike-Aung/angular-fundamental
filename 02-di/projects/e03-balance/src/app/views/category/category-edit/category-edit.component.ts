import { CategoryService } from './../../../services/category.service';
import { _Type } from './../../../models/balance.model';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var $:any

@Component({
  selector: 'category-edit-modal',
  templateUrl: './category-edit.component.html',
  styles: [
  ]
})
export class CategoryEditComponent {

  form: FormGroup
  types: string[]

  @Input()
  set InputValue(value: any) {
    this.form.patchValue(value);
  }

  @Output()
  outputValue = new EventEmitter();

  constructor(
    private builder: FormBuilder,
    private service: CategoryService
  ) { 
    this.form = this.builder.group({
      id: 0,
      type: ['', Validators.required],
      name: ['', Validators.required],
    })

    this.types = ['', ...Object.keys(_Type)];

  }

  save() {

    if(this.form.valid) {

      if(!this.service.isDuplicated(this.form.value)) {
        // Save Category
        this.outputValue.emit(this.form.value);
        this.form.reset();
        $('#category-modal').css('display','none');
      }
      else {
        // Add Duplication Error
        this.form.setErrors({
          duplicate: true,
        }); 
      }
    }else {
      // Form is in invalid state
      this.form.markAllAsTouched();
    }
  }

  close() {
    $('#category-modal').css('display','none');
    // clear form value after closing the modal with invalid state
    this.form.reset();
  }

  getControl(name: string): AbstractControl | null{
    return this.form.get(name);
  }

  showError(name: string): boolean {

    const control = this.getControl(name);
    return control!['invalid'] && (control!['touched'] || control!['dirty']);
  }
}
