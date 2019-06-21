import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateChildComponent } from './alternate-child.component';

describe('AlternateChildComponent', () => {
  let component: AlternateChildComponent;
  let fixture: ComponentFixture<AlternateChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternateChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternateChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
