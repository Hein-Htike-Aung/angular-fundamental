import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './interpolation.component.html',
})
export class InterpolationComponent {

  model = {
    title: 'Text Interpolation',
    image: 'angular-logo.png',
  };

  getDate() {
    return new Date();
  }

  hidden = false;

  data: Data = {
    id: 3,
  };

  times(n1: number, n2: number): number {
    return n1 * n2;
  }

  languages = ['JavaScript', 'TypeScript'];
}

export interface Data {
  id?: number;
}
