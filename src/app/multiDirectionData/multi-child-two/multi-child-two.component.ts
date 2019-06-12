import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multi-child-two',
  templateUrl: './multi-child-two.component.html',
  styleUrls: ['./multi-child-two.component.css']
})
export class MultiChildTwoComponent implements OnInit {

  @Input('eventStream') eventStream$;

  constructor() { }

  ngOnInit() {
  }

}