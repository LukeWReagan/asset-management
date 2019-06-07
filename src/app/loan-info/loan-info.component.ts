import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';
import { User } from '../_models/user';
import { LoanDetail } from '../_models/LoanDetail';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-loan-info',
  templateUrl: './loan-info.component.html',
  styleUrls: ['./loan-info.component.css']
})
export class LoanInfoComponent implements OnInit {
  empId:any;
  empName:any;
  loans:any;
  resolveLoanId:any;
  users: User[] = [];

  public userData: any;
  
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
           // trick the Router into believing it's last link wasn't previously loaded
           this.router.navigated = false;
           // if you need to scroll back to top, here is the right place
           window.scrollTo(0, 0);
           this.init_function();
        }
    });
    this.init_function();
  }

  init_function() {
    this.loans = [];
    this.empId = this.userService.storedId;
    this.empName = this.userService.storedName;
    this.resolveLoanId = -1;
    //console.log('hi');
     this.userService.currentLoanId.subscribe(newLoanId => {
       if (newLoanId === null || newLoanId === undefined) return;
       this.resolveLoanId = newLoanId;
     });

    this.userService.getLoans(this.empId).subscribe(info => {
      this.loans = info;
      if (this.loans[0].LoanID == -1) {
        this.loans = [];
      }
      //console.log('loanDetailKeys:');
      //console.log(this.loanDetailKeys);
      //console.log(info);
      this.userService.lastSeenPage = 'loan-info';
    });
  }

  displayWrapper(loan) {
     console.log('displayWrapper called');
    // console.log(keys);

    let rtn = {};
    for(let key of this.getKeys(loan)) {
      rtn[key] = this.displayKey(key);
    }
    //console.log('rtn nxt line');
    //console.log(rtn);
    return rtn;
  }
  displayKey(key:string) {
    if (key === null || key === undefined || key == "") {
      //console.log('key bad: ' + key);
      return 'null/undef/empty';
    }
    //console.log('input key: ' + key);
    let re = /([A-Z][a-z]+)([A-Z])/;
    let rtn = key.replace(re, '$1\u00A0$2');
    //console.log('rtn key:' + rtn);
    return rtn;
  }

  getKeys(obj:LoanDetail) {
    if (obj === null || obj === undefined) return [];
    return  Object.keys(obj);
  }

  filterKeys(keys) {
    return keys.filter(key => this.goodKey(key));
  }
  goodKey(key:string) {
    if (key == null || key == undefined) return false;
    if (key == "LoanID" || key == "EmployeeID" || key == "ProjectID") return false;
    return true;
  }
  setLoanId(id) {
    return this.userService.setLoanId(id);
  }
  openLoanResolve(id) {
    this.userService.setLoanId(id);
  }

  viewAssetHistory(assetNum) {
    this.userService.storedId = assetNum;
    localStorage.setItem('assetID', assetNum);
    console.log('set storedId and localStorage assetID  to ' + assetNum);
  }
  
}
