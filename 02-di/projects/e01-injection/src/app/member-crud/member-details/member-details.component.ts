import { MemberService } from './../../services/member.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  providers: [
    SubSink
  ]
})
export class MemberDetailsComponent implements OnDestroy{
  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private service: MemberService,
    private router: Router,
    private route: ActivatedRoute,
    private subSink: SubSink
  ) {
    this.form = this.builder.group({
      name: '',
      contact: this.builder.group({
        phone: '',
        email: '',
      }),
      role: '',
    });

    this.subSink.sink = this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      if (id) {
        let member = this.service.getById(id);
        if (member) {
          this.form.patchValue(member);
        }
      }
    })

  }
  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
