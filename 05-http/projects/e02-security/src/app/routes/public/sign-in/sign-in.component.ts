import { SignInService } from './../../../common/app-service/services/sign-in.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { SecurityContext } from '../../../domain/security/security.context';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [],
})
export class SignInComponent {
  form: FormGroup;
  invlaidCredential = false;

  constructor(
    private builder: FormBuilder,
    private signInService: SignInService,
    private securityContext: SecurityContext,
    private router: Router
  ) {
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signIn() {
    this.signInService.signIn(this.form.value).subscribe((resp) => {
      if (resp.error) {
        this.invlaidCredential = true;
        this.form.reset();
      } else {
        switch (resp) {
          case 'ADMIN':
          case 'TEACHER':
            this.router.navigate(['/teacher']);
            break;
          case 'STUDENT':
            this.router.navigate(['/student']);
            break;
          default:
            this.router.navigate(['/public/forbidden']);
            break;
        }
      }
    });
  }
}
