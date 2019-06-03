import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLoanButtonComponent } from './new-loan-button.component';

describe('NewLoanButtonComponent', () => {
  let component: NewLoanButtonComponent;
  let fixture: ComponentFixture<NewLoanButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLoanButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLoanButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
