import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multi-child-one',
  templateUrl: './multi-child-one.component.html',
  styleUrls: ['./multi-child-one.component.css']
})
export class MultiChildOneComponent implements OnInit {

  @Input('eventStream') eventStream$;

  constructor() { }

  ngOnInit() {}

}