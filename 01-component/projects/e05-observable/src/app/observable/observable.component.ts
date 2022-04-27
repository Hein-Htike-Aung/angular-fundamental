import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styles: [
  ]
})

export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    /* Observable */
    let observable = new Observable((observer) => {
      observer.next('hello');
      observer.next('Angular');

      // throw {message: "Error has been thrown"};

      observer.complete();
    });

    observable.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    })

    observable.subscribe({
      next: (data) => {
        console.log('2', data);
      }
    })

    /* of method */
    let observable2 = of(
      "Hello Angular",
      "Hello Typescript"
    )

    observable2.subscribe(data => console.log(data));

    /* Subject */
    let subject = new Subject();

    subject.next('subscribers wont know this data');
    let s1 = subject.subscribe(data => console.log('1', data));
    s1.unsubscribe();
    let s2 = subject.subscribe(data => console.log('2', data));
    subject.next("Hello Ts");
  }

}
