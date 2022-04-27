import { Member, MemberService, Role } from './../services/member.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
import { SubSink } from 'subsink';

@Component({
  templateUrl: './member-crud.component.html',
  providers: [SubSink]
})
export class MemberCrudComponent implements OnDestroy{

  searchForm: FormGroup;
  roles: string[];
  memberlist:Member[] = [];

  constructor(
    private builder: FormBuilder, 
    private service: MemberService,
    private subSink: SubSink
  ) {

    this.searchForm = this.builder.group({
      name: '',
      role: '',
    }),

    this.roles = ['',...Object.keys(Role)];

    this.getAll();

    /* Searching */
    this.subSink.sink = this.searchForm.get('name')?.valueChanges.subscribe(value => {
      this.memberlist = this.service.findByName(value) || [];
    });

    this.subSink.sink = this.searchForm.get('role')?.valueChanges.subscribe(value => {
      this.memberlist = this.service.findByRole(value) || [];
    });

  }
  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  delete(id: number) {
    this.service.delete(id);1
    this.getAll();
  }

  getAll() {
    this.memberlist = this.service.getAllMember() || [];
  }
}
