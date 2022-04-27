import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styles: [
  ]
})
export class PathComponent {

  pathParams?: {id: number, type: string};
  pathParamMap?: {id: string | null, type: string | null};

  constructor(
    private route: ActivatedRoute
  ) { 

    this.route.params.subscribe(params => {
      this.pathParams = {
        id: params['id'],
        type: params['type']
      }
    })

    this.route.paramMap.subscribe(params => {
      this.pathParamMap = {
        id: params.get('id'),
        type: params.get('type'),
      }
    })

  }

}
