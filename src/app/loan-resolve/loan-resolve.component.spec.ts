import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanResolveComponent } from './loan-resolve.component';

describe('LoanResolveComponent', () => {
  let component: LoanResolveComponent;
  let fixture: ComponentFixture<LoanResolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanResolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
