import { Component, OnInit, Input, Output } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-multi-child-two',
  templateUrl: './multi-child-two.component.html',
  styleUrls: ['./multi-child-two.component.css']
})
export class MultiChildTwoComponent implements OnInit {

  @Input('eventStream') eventStream$;
  @Output('done') state: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  ngOnInit() {
    this.eventStream$ = this.eventStream$.pipe(
      map(val => {
        console.log(val);
        if (val === 'Running') this.start();
      })
    )
  }

  start() {
    this.state.next('Loading...');
    setTimeout(val => {
      this.state.next('Complete!');
    }, 3000);
  }


}