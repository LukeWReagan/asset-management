import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_service/user.service';
import { AlertService } from '../_service/alert.service';

@Component({
  selector: 'app-loan-resolve',
  templateUrl: './loan-resolve.component.html',
  styleUrls: ['./loan-resolve.component.css']
})
export class LoanResolveComponent implements OnInit {

  public loanForm: FormGroup;
  @Input() loanid:any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loanForm = this.formBuilder.group({
      LoanID: ['', []],
      ReturnDate: ['', []],
      ReturnSupervisor: ['', []],
      ReturnCondition: ['', []]
    });
    console.log('loanid: ' + this.loanid);
    this.loanForm.get('LoanID').setValue(this.loanid);
  }

  cancelLoanResolve() {
    this.userService.setLoanId(-1);
  }
}
