import { _Type } from './../models/balance.model';
import { InMemoryDbService } from './../../../../e01-injection/src/app/services/in-memory-db.service';
import { Injectable } from '@angular/core';
import { Category } from '../models/balance.model';
import { InMemoryStorageService } from './in-memory-storage.service';
import { IdGeneratorService } from './id-generator.service';
import { StorageServiceInter } from './storage.service';

const STORAGE_KEY = 'com.hha.balance.category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService implements StorageServiceInter {

  private categoryStorage: Record<number, Category> = {};

  constructor(
    private idGenerator: IdGeneratorService
  ) {}

  search(searchValue: { type?: _Type; name?: string }): Category[] {

    return Object.values(this.categoryStorage).filter((category) => {

      if (searchValue.type && category.type != searchValue.type) {
        return false;
      } else if (
        searchValue.name &&
        !category.name.toLowerCase().startsWith(searchValue.name.toLowerCase())
      ) {
        return false;
      }

      return !category.deleted;
    });
  }

  findByType(type: string) {
    return Object.values(this.categoryStorage).filter(c => c.type === type);
  }

  save(category: Category) {
    if (category.id) {
      this.categoryStorage[category.id] = category;
    } else {
      const generatedId = this.idGenerator.next('category');
      this.categoryStorage[generatedId] = {...category, id: generatedId}
    }

    // save to borwser Storage
    this.saveData();
  }

  isDuplicated(category: Category): boolean {

    const duplicatedCategory = Object.values(this.categoryStorage).find(c => {
      if((c.name.toLowerCase() === category.name.toLowerCase()) && (c.type === category.type)) {
        return true;
      }
      else return false;
    })    

    return duplicatedCategory ? true : false;

  }

  delete(id: number) {
    let targetDeleteItem = this.categoryStorage[id];
    if(targetDeleteItem.deleted) {

      targetDeleteItem = { ...targetDeleteItem, deleted: false };
    }else {
      targetDeleteItem = { ...targetDeleteItem, deleted: true };
    }
    this.categoryStorage[targetDeleteItem.id] = targetDeleteItem;

    // save to borwser Storage
    this.saveData();
  }

  getAll() {
    return Object.values(this.categoryStorage);
  }

  loadData() {
    const dataFromLocalStorage = localStorage.getItem(STORAGE_KEY);
    if (dataFromLocalStorage) {
      const categories = JSON.parse(dataFromLocalStorage) as Category[];

      categories.forEach((c) => this.categoryStorage[c.id] = c);
    }
  }

  saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Object.values(this.categoryStorage)));
  }
}
