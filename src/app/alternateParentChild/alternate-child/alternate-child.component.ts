import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alternate-child',
  templateUrl: './alternate-child.component.html',
  styleUrls: ['./alternate-child.component.css']
})
export class AlternateChildComponent implements OnInit {

 @Input('eventData') eventData;

  constructor() {}

  ngOnInit() {}

  getMessage(toggle) {
    if (toggle) return 'Agreed';
    else return 'Agree to terms by clicking';
  }

}