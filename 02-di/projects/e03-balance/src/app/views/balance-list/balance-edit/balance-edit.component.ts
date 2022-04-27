import { BalanceWithDetails, Category } from './../../../models/balance.model';
import { CategoryService } from './../../../services/category.service';
import { BalanceService } from './../../../services/balance.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-edit',
  templateUrl: './balance-edit.component.html',
  styles: [
  ]
})
export class BalanceEditComponent  {

  title:string = '';
  type:string = '';
  categories: Category[] = [];
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private balanceService: BalanceService,
    private categoryService: CategoryService
  ) { 

    this.form = this.builder.group({
      balance: builder.group({
        id: 0,
        applyDate: ['', Validators.required],
        category: ['', Validators.required],
        employee: ['', Validators.required],
        total: [0, Validators.min(500)],
      }),
      balanceDetails: builder.array([])
      
    })

    this.route.params.subscribe(param => {
      
      const id = Number(param['id']);
      this.type = param['type'];

      // Title
      if(id == 0) {
        this.title = 'Add New ' + this.type;
      }else {
        this.title = 'Edit ' + this.type;
      }

      this.categories = this.categoryService.findByType(this.type).filter(c => !c.deleted);

      if(id) {
        // Edit
        const balanceWithDetails: BalanceWithDetails = this.balanceService.findBalanceWithDetailsByBalanceId(id);

        if(balanceWithDetails) {
          this.form.patchValue({balance: balanceWithDetails.balance});

          balanceWithDetails.balanceDetails.forEach(d => {
            const control = this.balanceDetailsControl;
            control.patchValue(d);
            this.balanceDetails.push(control);
          })
        }

      }else {
        // Add New
        this.addDetails();
      }

    })

    // Calculate Total
    this.balanceDetails.valueChanges.subscribe( _ => {
      this.form.get('balance')?.patchValue(
        {
          total: this.balanceDetails.controls
            .map(detailsControl => detailsControl.value.price * detailsControl.value.quantity)
            .reduce((a, b) => a + b)}
        );
    })
  }

  get balanceDetails(): FormArray {
    return this.form.get('balanceDetails') as FormArray;
  }

  get balanceDetailsControl() {
    return this.builder.group({
      id: 0,
      balance: '',
      item: ['', Validators.required],
      quantity: [0, Validators.min(0)],
      price: [0, Validators.min(500)],
      remark: ''
    });
  }

  addDetails() {
    this.balanceDetails.push(this.balanceDetailsControl);
  }

  removeDetails(index: number) {
    this.balanceDetails.length > 1 ? this.balanceDetails.removeAt(index) : '';
  }

  save() {
    if(this.form.valid) {
      this.balanceService.save({...this.form.value});
      this.form.reset();
      this.router.navigate(['/balance', this.type]);
    }else {
      this.form.markAllAsTouched();
    }
    
  }

}
