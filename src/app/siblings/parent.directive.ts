import { Directive, Input } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Directive({
  selector: '[appParent]'
})
export class ParentDirective {

  private behaviorSubject = new BehaviorSubject('#1e90ff');
  public observable$ = this.behaviorSubject.asObservable();

  constructor() { }

  ngOnInit() { }

  updateColor(color) {
    this.behaviorSubject.next(color);
  }

}