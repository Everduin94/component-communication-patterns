import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject, combineLatest, fromEvent, Observable } from 'rxjs';
import { map, mapTo, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-multi-parent',
  templateUrl: './multi-parent.component.html',
  styleUrls: ['./multi-parent.component.css']
})
export class MultiParentComponent implements OnInit {

  private state = new BehaviorSubject('Off');
  public eventStream$: Observable<any> = this.state.asObservable();

  constructor() { }

  ngOnInit() {}

}