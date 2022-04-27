import { ValidatorFn } from '@angular/forms';
import { BalanceSearch, BalanceDetailsSearch, BalanceVO } from './../models/balance.vo';
import { Balance, BalanceDetails, BalanceWithDetails } from './../models/balance.model';
import { InMemoryDbService } from './../../../../e01-injection/src/app/services/in-memory-db.service';
import { Injectable } from '@angular/core';
import { StorageServiceInter } from './storage.service';
import { InMemoryStorageService } from './in-memory-storage.service';
import { IdGeneratorService } from './id-generator.service';
import { DatePipe } from '@angular/common';

const STORAGE_KEY_BALANCE = 'com.hha.balance.balance';
const STORAGE_KEY_DETAILS = 'com.hha.balance.balanceDetails';

@Injectable({
  providedIn: 'root',
})
export class BalanceService implements StorageServiceInter {

  private balanceStorage: Record<number, Balance> = {};
  private balanceDetailsStorage: Record<number, BalanceDetails> = {};

  constructor(
    private idGenerator: IdGeneratorService,
    private datePipe: DatePipe
  ) {}

  save(balanceWithDetails: BalanceWithDetails) {

    if(balanceWithDetails.balance.id != 0) {
      // Edit
      this.balanceStorage[balanceWithDetails.balance.id] = {... balanceWithDetails.balance};

      balanceWithDetails.balanceDetails.forEach(d => {
        this.balanceDetailsStorage[d.id] = {...d};
      })

    }else {
      // Add New
      const generatedId = this.idGenerator.next('balance');
      this.balanceStorage[generatedId] = {...balanceWithDetails.balance, id: generatedId};

      balanceWithDetails.balanceDetails.forEach(d => {
        let generatedBalanceDetailsId = this.idGenerator.next('details');
        this.balanceDetailsStorage[generatedBalanceDetailsId] = {
          ...d,
          balance: balanceWithDetails.balance,
          id: generatedBalanceDetailsId
        };        
      })

    }

    // Save to Browser Storage
    this.saveData();
  }

  // Search in Balance Details
  searchBalanceDetails(balanceDetailsSearch: BalanceDetailsSearch): BalanceDetails[] {

    return Object.values(this.balanceDetailsStorage).filter(d => {

      if(balanceDetailsSearch.category && balanceDetailsSearch.category !== d.balance.category) {
        return false; 
      }

      const actualDate = this.datePipe.transform(d.balance.applyDate, 'yyyy/MM/dd');
      const dateFrom = this.datePipe.transform(balanceDetailsSearch.dateFrom, 'yyyy/MM/dd');
      const dateTo = this.datePipe.transform(balanceDetailsSearch.dateTo, 'yyyy/MM/dd');

     if(actualDate) {

      if(dateFrom && dateFrom > actualDate) {
        
        return false;
      }

      if(dateTo && dateTo < actualDate) {

        return false;
      }
     }

     return true;

    })

  }

  searchBalance(balanceSearch: BalanceSearch): BalanceVO[] {

    if(balanceSearch) {
      return Object.values(this.balanceStorage).filter(d => {

        if(balanceSearch.type && balanceSearch.type !== d.category.type) {
          return false;
        }
  
        if(balanceSearch.category && balanceSearch.category !== d.category) {
          return false; 
        }
  
        const actualDate = this.datePipe.transform(d.applyDate, 'yyyy/MM/dd');
        const dateFrom = this.datePipe.transform(balanceSearch.dateFrom, 'yyyy/MM/dd');
        const dateTo = this.datePipe.transform(balanceSearch.dateTo, 'yyyy/MM/dd');
  
       if(actualDate) {
  
        if(dateFrom && dateFrom > actualDate) {
          
          return false;
        }
  
        if(dateTo && dateTo < actualDate) {
  
          return false;
        }
       }
  
       return true;
  
      })
    }else {
      // Search All
      console.log('asfsdaf');
      return Object.values(this.balanceStorage);
    }

  }

  // Search Balance With Details By BalanceId
  findBalanceWithDetailsByBalanceId(id: number): BalanceWithDetails {

    return {
      balance: this.balanceStorage[id],
      balanceDetails: Object.values(this.balanceDetailsStorage).filter(d => d.id == id),
    };
  }

  getAllBalanceDetails(): BalanceDetails[] {
    return Object.values(this.balanceDetailsStorage);
  }

  getAllBalance(): Balance[] {
    return Object.values(this.balanceStorage);
  }

  loadData() {
    const balanceFromLocalStorage = localStorage.getItem(STORAGE_KEY_BALANCE);
    if(balanceFromLocalStorage) {
      const balances = JSON.parse(balanceFromLocalStorage) as Balance[];
      balances.forEach(b => this.balanceStorage[b.id] = b);
    }

    const detailsFromLocalStorage = localStorage.getItem(STORAGE_KEY_DETAILS);
    if(detailsFromLocalStorage) {
      const detailsArray = JSON.parse(detailsFromLocalStorage) as BalanceDetails[];
      detailsArray.forEach(d => this.balanceDetailsStorage[d.id] = d);
    }
  }

  saveData() {
    localStorage.setItem(STORAGE_KEY_BALANCE, JSON.stringify(Object.values(this.balanceStorage)));
    localStorage.setItem(STORAGE_KEY_DETAILS, JSON.stringify(Object.values(this.balanceDetailsStorage)));
  }
}
