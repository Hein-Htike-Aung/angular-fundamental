import { _Type } from './../models/balance.model';
import { Injectable } from '@angular/core';
import { StorageServiceInter } from './storage.service';


const STORAGE_KEY = 'com.hha.balance.ids';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {

  private record =  {
    category: 0,
    balance: 0,
    details: 0,

  }

  next(key: 'category' | 'balance' | 'details'): number {

    return ++ this.record[key];

  }

}
