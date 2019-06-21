import { Component, OnInit } from '@angular/core';
import { ParentDirective } from '../parent.directive';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  color$;

  constructor(public directive: ParentDirective) { }

  ngOnInit() {
    this.color$ = this.directive.observable$;
  }

}