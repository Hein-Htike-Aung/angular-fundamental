import { SaleComponent } from './sale/sale.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'purchase', component: PurchaseComponent },
  { path: 'sale', component: SaleComponent },
  { path: '', redirectTo: 'purchase', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}
