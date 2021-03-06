import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../_service/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../_models/Employee';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  empName:any;
  empPhone:any;
  loanCount: any;
  employee:Employee;
  empId:any;
  empWA:any;
  empEmail:any;
  numOpenLoans:number;
  empHA:any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Check if the stored name/phone is undefined, and if yes then load them from localStorge
    if (this.userService.storedName === undefined) {
      this.userService.storedName = localStorage.getItem('storedName');
      console.log('userService.storeName undefined');
    } else {
      console.log('storedName not undefined:' + this.userService.storedName);
    }
   /* if (this.userService.storedPhone === undefined) {
      this.userService.storedPhone = localStorage.getItem('storedPhone');
      //console.log('userService.storedId undefined');
    }*/
    if (this.userService.storedId === undefined) {
      this.userService.storedId = localStorage.getItem('storedId');
      //console.log('userService.storedId undefined');
    }
    this.empName = this.userService.storedName;
    //this.empPhone = this.userService.storedPhone;
    this.empId = this.userService.storedId;
    this.empWA = "n/a";
    this.empHA = "n/a";
    this.empEmail = "n/a";
    this.empPhone = "n/a";
    

    this.userService.getInfo(this.empId).subscribe(info => {
        this.employee = (<Employee>info);
        console.log(info);
        this.empPhone = this.employee.Phone;
        this.empWA = this.employee.WorkAddress;
        this.empHA = this.employee.HomeAddress;
        this.empName = this.employee.FirstName + " " + this.employee.LastName;
        if (this.empPhone == "" || this.empPhone === null) this.empPhone = "n/a";
        if (this.empWA == "" || this.empWA === null) this.empWA = "n/a";
        if (this.empHA == "" || this.empHA === null) this.empHA = "n/a";
        //this.loanCount = this.employee.length;
      });

      this.userService.getLoans(this.empId).subscribe(info => {
        //console.log('getLoans info: ');
        //console.log(info);
        if (info[0].LoanID == -1) {
          this.numOpenLoans = 0;
        } else {
          this.numOpenLoans = info.length;
        }
        console.log('open loans: ' + this.numOpenLoans);
      });
      this.userService.lastSeenPage = 'info';
  }
  dataToService(name, id) {
    this.userService.setName(name);
    this.userService.setId(id);
  }
  autoFillUser() {
    localStorage.setItem('empAF', JSON.stringify(this.employee));
    this.userService.changeMessage(JSON.stringify({'autofill':true, 'info':this.employee}))
  } 
}
