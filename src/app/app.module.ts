import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlternateChildComponent } from './alternateParentChild/alternate-child/alternate-child.component';
import { AlternateParentComponent } from './alternateParentChild/alternate-parent/alternate-parent.component';
import { MultiChildComponent } from './multiDirectionData/multi-child/multi-child.component';
import { MultiParentComponent } from './multiDirectionData/multi-parent/multi-parent.component';
import { ChildComponent } from './parentToChild/child/child.component';
import { ParentComponent } from './parentToChild/parent/parent.component';
import { ChildOneComponent } from './siblings/child-one/child-one.component';
import { ChildTwoComponent } from './siblings/child-two/child-two.component';
import { ParentDirective } from './siblings/parent.directive';
import { ActivatorComponent } from './unrelated/activator/activator.component';
import { ToastComponent } from './unrelated/toast/toast.component';
import { ToastService } from './unrelated/toast.service';

@NgModule({
  declarations: [
    AppComponent,
    AlternateChildComponent,
    AlternateParentComponent,
    MultiChildComponent,
    MultiParentComponent,
    ChildComponent,
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ParentDirective,
    ActivatorComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
