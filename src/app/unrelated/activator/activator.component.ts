import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-activator',
  templateUrl: './activator.component.html',
  styleUrls: ['./activator.component.css']
})
export class ActivatorComponent implements OnInit {

  constructor(private ts: ToastService) { }

  ngOnInit() {
  }

  onChange() {
    this.ts.setEnabled();
  }

}