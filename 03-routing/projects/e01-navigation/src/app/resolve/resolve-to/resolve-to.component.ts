import { Person } from './../person.resolver';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolve-to',
  templateUrl: './resolve-to.component.html',
  styles: [
  ]
})
export class ResolveToComponent implements OnInit {

  person?: Person;

  constructor(
    private route: ActivatedRoute
  ) { 
    this.route.data.subscribe(data => {
      this.person = data['person'];
    })
  }

  ngOnInit(): void {
  }

}
