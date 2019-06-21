import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwoComponent } from './child-two.component';

describe('ChildTwoComponent', () => {
  let component: ChildTwoComponent;
  let fixture: ComponentFixture<ChildTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
