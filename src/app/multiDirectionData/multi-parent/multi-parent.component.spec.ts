import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiParentComponent } from './multi-parent.component';

describe('MultiParentComponent', () => {
  let component: MultiParentComponent;
  let fixture: ComponentFixture<MultiParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
