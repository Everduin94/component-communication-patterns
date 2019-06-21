import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('eventStream') eventStream$;

  constructor() {}

  ngOnInit() {}

  getMessage(toggle) {
    if (toggle) return 'Agreed';
    else return 'Agree to terms by clicking';
  }
}