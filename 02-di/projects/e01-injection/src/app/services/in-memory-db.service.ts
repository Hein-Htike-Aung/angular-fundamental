import { Injectable } from '@angular/core';

export interface ID {
  id: number;
}

interface DBTransaction<T extends ID> {
  set: (value: T) => void; 
  get: (id: number) => T | null;
  delete: (id:number) => void;
  getAll: () => T[] | null;
}


@Injectable({
  providedIn: 'root'
})
export class InMemoryDbService<T extends ID> implements DBTransaction<T>
{

  private record: Record<number, T> = {};

  private generatedId = 0;

  set(member: T) {
    let id = member.id as number;
    if(id) {
      this.record[id] = member;
    }else {      
      id = ++ this.generatedId;
      this.record[id] = {...member, id: id};
    }
    return id;
  }

  get(id:number): T | null {
    return this.record[id];
  }

  delete(id: number) {
    delete this.record[id];
  }

  getAll(): T[] | null {
    return Object.values(this.record).map(value => value);
  }

}
