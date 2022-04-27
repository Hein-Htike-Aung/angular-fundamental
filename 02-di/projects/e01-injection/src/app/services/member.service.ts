import { Injectable } from '@angular/core';
import { ID, InMemoryDbService } from './in-memory-db.service';

export enum Role {
  ADMIN = 'ADMIN', 
  EDITOR = 'EDITOR', 
  MEMBER = 'MEMBER',
}

export interface Member extends ID{
  readonly id: number;
  readonly name: string;
  readonly role: Role;
  readonly contact: {
    phone: string;
    email: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  generatedId = 0;
  constructor(private db: InMemoryDbService<Member>) {}

  addAndUpdateMember(member: Member):number {
    return this.db.set(member);
  }

  findByName(name: string): Member[] | undefined{
    return this.db.getAll()?.filter(member => member.name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase()));
  }

  findByRole(role: string) {
    if(role) {
      return this.db.getAll()?.filter(member => member.role == role);
    }
    // Search With All roles
    return this.db.getAll();
  }

  getById(id: number) {
    return this.db.get(id);
  }

  getAllMember(): Member[] | undefined{
    return this.db.getAll()?.sort((a, b) => a.id - b.id);
  }

  delete(id: number) {
    this.db.delete(id);
  }

}
