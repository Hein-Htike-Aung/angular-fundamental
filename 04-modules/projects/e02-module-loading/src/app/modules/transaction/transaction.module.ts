import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { PurchaseComponent } from './purchase/purchase.component';
import { SaleComponent } from './sale/sale.component';


@NgModule({
  declarations: [
  
    PurchaseComponent,
       SaleComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
