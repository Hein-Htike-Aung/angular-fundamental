import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  pageOne = [
    { outlets: { primary: ['page-one'], sideMenu: ['side-menu-one'] } },
  ];
  pageTwo = [
    { outlets: { primary: ['page-two'], sideMenu: ['side-menu-two'] } },
  ];
}
