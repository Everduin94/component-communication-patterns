import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-multi-parent',
  templateUrl: './multi-parent.component.html',
  styleUrls: ['./multi-parent.component.css']
})
export class MultiParentComponent implements OnInit {

  private state = new BehaviorSubject({
    start: false,
    oneComplete: false,
    twoComplete: false
  });
  public eventStream$ = this.state.asObservable();

  constructor() { }

  ngOnInit() {
  }

}