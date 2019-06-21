import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-alternate-parent',
  templateUrl: './alternate-parent.component.html',
  styleUrls: ['./alternate-parent.component.css']
})
export class AlternateParentComponent implements OnInit {

  private data = new BehaviorSubject({
    enabled: false,
    toolTip: false
  });
  public eventStream$ = this.data.asObservable()

  constructor() { }

  ngOnInit() {}

  update(value, command) {
    let update = this.data.value;
    if (command === 'enabled') update.enabled = value;
    if (command === 'toolTip') update.toolTip = value;
    this.data.next(update);
  }

}