import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ChildOneComponent } from './siblings/child-one/child-one.component';
import { ChildTwoComponent } from './siblings/child-two/child-two.component';
import { ParentDirective } from './siblings/parent.directive';
import { ToastComponent } from './unrelated/toast/toast.component';
import { ParentComponent } from './parentToChild/parent/parent.component';
import { ChildComponent } from './parentToChild/child/child.component';
import { ActivatorComponent } from './unrelated/activator/activator.component';

import { ToastService } from './unrelated/toast.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ChildOneComponent, ChildTwoComponent,  ParentDirective, ToastComponent, ParentComponent, ChildComponent, ActivatorComponent],
  bootstrap:    [ AppComponent ],
  providers: [ToastService]
})
export class AppModule { }
