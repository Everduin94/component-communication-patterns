import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  private currentState = new BehaviorSubject({
    enabled: false,
    toolTip: false
  });
  public eventStream$ = this.currentState.asObservable()

  constructor() { }

  ngOnInit() {
  }

  update(value, command) {
    let update = this.currentState.value;
    if (command === 'enabled') update.enabled = value;
    if (command === 'toolTip') update.toolTip = value;
    this.currentState.next(update);
  }

}