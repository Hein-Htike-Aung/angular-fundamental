import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
