import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateParentComponent } from './alternate-parent.component';

describe('AlternateParentComponent', () => {
  let component: AlternateParentComponent;
  let fixture: ComponentFixture<AlternateParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternateParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternateParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
