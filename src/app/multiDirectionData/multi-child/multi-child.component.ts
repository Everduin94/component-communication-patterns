import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-multi-child',
  templateUrl: './multi-child.component.html',
  styleUrls: ['./multi-child.component.css']
})
export class MultiChildComponent implements OnInit, OnDestroy {

  @Input('loadtime') loadtime;
  @Input('eventStream') eventStream$;
  state: BehaviorSubject<string> = new BehaviorSubject('');
  //  @Output('done') outputStream$ = this.state.asObservable();
   @Output('done') eventEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.state.subscribe(val => {
      this.eventEmitter.emit(val);
    });
    this.eventStream$ = this.eventStream$.pipe(
      tap(val => {
        if (val === 'Running') this.start();
      })
    )
  }

  start() {
    this.state.next('Loading...');
    setTimeout(val => {
      this.state.next('Complete!');
    }, this.loadtime);
  }

  ngOnDestroy() {
    this.state.unsubscribe();
  }
}