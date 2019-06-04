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
  employee:any;
  empId:any;
  empWA:any;
  empEmail:any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Check if the stored name/phone is undefined, and if yes then load them from localStorge
    if (this.userService.storedName === undefined) {
      this.userService.storedName = localStorage.getItem('storedName');
      console.log('userService.storeName undefined');
    } else {
      console.log('storedName not undefined:' + this.userService.storedName);
    }
    if (this.userService.storedPhone === undefined) {
      this.userService.storedPhone = localStorage.getItem('storedPhone');
      //console.log('userService.storedId undefined');
    }
    if (this.userService.storedId === undefined) {
      this.userService.storedId = localStorage.getItem('storedId');
      //console.log('userService.storedId undefined');
    }
    this.empName = this.userService.storedName;
    this.empPhone = this.userService.storedPhone;
    this.empId = this.userService.storedId;
    this.empWA = "n/a";
    this.empEmail = "n/a";
    

    this.userService.getInfo(this.empId).subscribe(info => {
        this.employee = info;
        console.log(info);
        this.loanCount = this.employee.length;
      });
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
