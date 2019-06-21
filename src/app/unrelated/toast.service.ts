import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ToastService {

  private bs = new BehaviorSubject(false);
  public eventStream$ = this.bs.asObservable();

  constructor() {}

  public setEnabled() {
    if (!this.bs.value) {
      this.bs.next(true);
      setTimeout(val => {
        this.bs.next(false);
      }, 5000);
    }
  }
}