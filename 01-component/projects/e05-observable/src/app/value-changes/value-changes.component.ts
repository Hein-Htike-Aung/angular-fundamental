import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductInter, ProductService } from './product.service';

@Component({
  selector: 'app-value-changes',
  templateUrl: './value-changes.component.html',
  providers: [
    ProductService
  ]
})
export class ValueChangesComponent  {

  form: FormGroup

  categories:string[] = [];

  products: ProductInter[] = [];

  constructor(builder: FormBuilder, private service: ProductService) {
    this.form = builder.group({
      category: '',
      product: ['', Validators.required]
    })

    this.categories = this.service.categories;

    /* Element Value Changes */
    this.form.get('category')?.valueChanges.subscribe(category => {
      this.products = this.service.search(category);
    })

    /* Form Value Changes */
    this.form.valueChanges.subscribe(value => console.log(value));

    /* Form Status Changes */
    this.form.statusChanges.subscribe(value => console.log(value));
    
  }


}
