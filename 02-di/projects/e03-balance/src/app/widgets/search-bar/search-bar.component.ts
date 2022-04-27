import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/balance.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styles: [
  ]
})
export class SearchBarComponent implements OnChanges{

  @Input()
  type?: string;
  
  @Output()
  onSearch = new EventEmitter();
  
  @Output()
  onSearchAll = new EventEmitter();

  searchForm: FormGroup

  categories: Category[] = [];

  constructor(
    private builder: FormBuilder,
    private categoryService: CategoryService
  ) { 
    this.searchForm = this.builder.group({
      type: '',
      category: '',
      dateFrom: '',
      dateTo: '',
    });

    this.searchForm.get('type')?.valueChanges.subscribe(value => {
      this.categories = this.categoryService.findByType(value);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Change Value in Categories Select Box
    this.addCategories();
  }

  search() {
    this.onSearch.emit(this.searchForm.value);
  }

  searchAll() {
    this.searchForm.reset();
    this.searchForm.get('type')?.setValue('');
    this.searchForm.get('category')?.setValue('');
    this.addCategories();

    this.onSearchAll.emit(null);
  }

  addCategories() {
    if(this.type === 'Income') {
      this.categories = this.categoryService.findByType(this.type);

    }else if (this.type === 'Expense') {
      this.categories = this.categoryService.findByType(this.type);
    }
  }

}
