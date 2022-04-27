import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberService, Role } from './../../services/member.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  providers: [
    SubSink
  ]
})
export class MemberEditComponent implements OnDestroy{

  form: FormGroup;
  roles: string[];

  constructor(
    private builder: FormBuilder,
    private service: MemberService,
    private route: ActivatedRoute, // retrieve value from URL
    private router: Router, // For Navigation
    private subSink: SubSink // For UnScribtion
  ) { 
    this.form = this.builder.group({
      id: 0,
      name: ['', [Validators.required]],
      contact: builder.group({
        phone: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.required]],
      }),
      role: ['', [Validators.required]],
    });

    this.roles = Object.keys(Role);

    // retrieve value from URL
    this.subSink.sink = this.route.params.subscribe(param => {
      const id = Number(param['id']);
      if(id) {
        const member = this.service.getById(id);
        if(member) {
          this.form.patchValue(member);
        }
      }
    })

  }

  add() {
    if(this.form.valid) {
      const id = this.service.addAndUpdateMember(this.form.value);
    // redirect
    this.router.navigate(['/member', id, 'details']);
    }else {
      // Trigger All Validation
      this.form.markAllAsTouched();
    }
  }

  getControl(controlName: string, groupName = ''): AbstractControl | null | undefined{ 
    if(groupName) {
      return this.form.get(groupName)?.get(controlName);
    }
    return this.form.get(controlName);
  }

  showMessage(control: AbstractControl | null | undefined):boolean {

    return control!['invalid'] && (control!['dirty'] || control!['touched']);
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
