import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styles: [
  ]
})
export class QueryComponent {

  queryParam?: {data: string, color: string};
  queryParamMap?: {data: string | null, color: string | null};

  constructor(
    private route: ActivatedRoute
  ) { 

    this.route.queryParams.subscribe(param => {
      this.queryParam = {
        data: param['data'],
        color: param['color']
      }
    })

    this.route.queryParamMap.subscribe(param => {
      this.queryParamMap = {
        data: param.get('data'),
        color: param.get('color'),
      }
    })

  }

}
