import { CategoryService } from './../../services/category.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Category, _Type } from '../../models/balance.model';

declare var $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [
  ]
})
export class CategoryComponent {

  searchForm: FormGroup

  categoryList: Category[] = [];

  category!: Category;

  constructor(
    private builder: FormBuilder,
    private service: CategoryService
  ) { 


    this.searchForm = this.builder.group({
      type: '',
      name: ''
    })

    this.getAllCategory();

    this.searchForm.valueChanges.subscribe(value => {
      if(!value['type'] && !value['name']) {
        this.categoryList = this.service.search({type: value['type'], name: value['name']}) || [];  
      }
      if(value['type']) {
        this.categoryList = this.service.search({type: value['type']}) || [];
      }
      if(value['name']) {
        this.categoryList = this.service.search({name: value['name']}) || [];
      }      
    });
  }

  addNew() {
    this.category = {
      id: 0,
      type: '',
      name: '',
      deleted: false,
    }
    $('#category-modal').css('display','block');
  }

  edit(category: Category) {

    this.category = category;
    $('#category-modal').css('display','block');
  }

  save(value: Category) {
    this.service.save(value)
    this.getAllCategory();
  }

  private getAllCategory() {
    this.categoryList = this.service.getAll();
  }

  delete(id: number) {
    this.service.delete(id);
    this.getAllCategory();
  }

}
