import { BalanceService } from './../../services/balance.service';
import { Component, OnInit } from '@angular/core';
import { BalanceVO } from '../../models/balance.vo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  list: BalanceVO[] = [];

  constructor(
    private balanceService: BalanceService
  ) { 
    this.search(null);
  }

  search(value: any) {
    this.list = this.balanceService.searchBalance(value);
  }

  searchAll(value: any) {
    this.search(null);
  }

}
