import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiChildComponent } from './multi-child.component';

describe('MultiChildComponent', () => {
  let component: MultiChildComponent;
  let fixture: ComponentFixture<MultiChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
