import { BalanceDetails, _Type } from './../../models/balance.model';
import { BalanceService } from './../../services/balance.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-balance-list',
  templateUrl: './balance-list.component.html',
  styles: [
  ]
})
export class BalanceListComponent {

  type = '';

  balanceDetailList: BalanceDetails[] = [];

  constructor(
    private route: ActivatedRoute,
    private balanceService: BalanceService
  ) {
    this.route.params.subscribe(param => {
      this.type = param['type'];

      // Find All BalanceDetails List
      this.searchAll(null);
    })
  
  }

  search(value: any) {
    this.balanceDetailList = this.balanceService.searchBalanceDetails(value).filter(d => d.balance.category.type === this.type);
  }

  searchAll(value: any) {
    if(!value) {
      this.balanceDetailList = this.balanceService.getAllBalanceDetails().filter(d => d.balance.category.type === this.type);
    }
  }

}
