import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  eventStream$

  constructor(private ts: ToastService) {
    this.eventStream$ = ts.eventStream$;
   }

  ngOnInit() {
  }

}