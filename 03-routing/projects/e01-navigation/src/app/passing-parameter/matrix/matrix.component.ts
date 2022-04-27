import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styles: [
  ]
})
export class MatrixComponent {

  pathParam?: {data: string, color: string};
  pathParamMap?: {data: string  | null, color: string | null};

  constructor(
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe(params => {
      this.pathParam = {
        data: params['data'],
        color: params['color'], 
      }
    })

    this.route.paramMap.subscribe(params => {
      this.pathParamMap = {
        data: params.get('data'),
        color: params.get('color')
      }
    })

  }

}
