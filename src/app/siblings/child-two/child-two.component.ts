import { Component, OnInit } from '@angular/core';
import { ParentDirective } from '../parent.directive';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  color$;

  constructor(public directive: ParentDirective) { }

  ngOnInit() {
    this.color$ = this.directive.observable$;
  }

  updateColor(val) {
    this.directive.updateColor(val);
  }
}