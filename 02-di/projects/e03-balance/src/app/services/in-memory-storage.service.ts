
import { Injectable } from '@angular/core';
import { ID } from '../models/balance.model';


interface DBTransaction<T extends ID> {
  set: (value: T) => void;
  get: (id: number) => T;
  getAll: () => T[];
}

@Injectable({
  providedIn: 'root'
})
export class InMemoryStorageService<T extends ID> implements DBTransaction<T>{

  private record: Record<number, T>  = {};

  set(value: T) {
    this.record[value.id] = value;
  }

  get(id: number): T {
    return this.record[id];
  }

  getAll(): T[] {
    return Object.values(this.record);
  }

}
