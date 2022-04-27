
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { SignOutService } from '../../common/app-service/services/sign-out.service';
import { SecurityContext } from './../../domain/security/security.context';
import { ModalDialogComponent } from '../../common/app-common/widgets/modal-dialog/modal-dialog.component';

@Component({
  templateUrl: './teacher.component.html',
  styles: [],
})
export class TeacherComponent {

  constructor(
    private securityContext: SecurityContext,
    private signOutService: SignOutService,
    private router: Router
  ) {}

  signOut() {
    this.signOutService.logout().subscribe((_) => {
      this.securityContext.clearSecurityContext();

        this.router.navigate(['/public']);

    });
  }


  get username() {
    return this.securityContext.user.username;
  }

  isAdmin() {
      return this.securityContext.authority === 'ADMIN';
  }
}
