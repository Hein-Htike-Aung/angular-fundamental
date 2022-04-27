import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

export interface Person {
  id: number; name: string;
}

export const DATA: Person[] = [
  {id: 1, name: 'xiaoting'},
  {id: 2, name: 'karina'},
  {id: 3, name: 'minjeong'},
  {id: 4, name: 'aung aung'},
  {id: 5, name: 'ning ning'},
]


@Injectable({
  providedIn: 'root'
})
export class PersonResolver implements Resolve<Person> {

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<Person> | Promise<Person> | Person{

    return DATA
      .find(data => data.id === Number(route.paramMap.get('id')))!;
    
  }
}
