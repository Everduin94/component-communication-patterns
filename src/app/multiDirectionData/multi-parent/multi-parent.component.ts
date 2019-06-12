import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject, combineLatest, fromEvent, Observable } from 'rxjs';
import { map, mapTo, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-multi-parent',
  templateUrl: './multi-parent.component.html',
  styleUrls: ['./multi-parent.component.css']
})
export class MultiParentComponent implements OnInit {

  @ViewChild('startBtn', {static: true})
  startBtn: ElementRef;

  private state = new BehaviorSubject('Off');
  public eventStream$: Observable<any>;

  constructor() { }

  ngOnInit() {
    const clickEvent = fromEvent(this.startBtn.nativeElement, 'click').pipe(map(val => {
      mapTo(true), startWith(false)
    }));
    this.eventStream$ = combineLatest(this.state.asObservable(), clickEvent);
  }

}