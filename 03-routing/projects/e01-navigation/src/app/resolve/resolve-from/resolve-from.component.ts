import { Component, OnInit } from '@angular/core';
import { ActivationEnd, ActivatedRoute } from '@angular/router';
import { Person } from '../person.resolver';

@Component({
  selector: 'app-resolve-from',
  templateUrl: './resolve-from.component.html',
  styles: [
  ]
})
export class ResolveFromComponent implements OnInit {

  people: Person[] = [];

  constructor(
    private route: ActivatedRoute
  ) { 
    this.route.data.subscribe(data => this.people = data['list']);
  }

  ngOnInit(): void {
  }

}
