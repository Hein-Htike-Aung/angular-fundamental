import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'master',
    children: [
      { path: 'category', component: CategoryComponent },
      { path: 'product', component: ProductComponent },
      { path: '', redirectTo: 'category', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule {}
