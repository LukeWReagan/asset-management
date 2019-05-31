import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  myName:any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    if (this.userService.storedId === undefined) {
      this.userService.storedId = localStorage.getItem('storedId');
    } else {
      console.log('storedId not undefined:' + this.userService.storedId);
    }
    this.myName = this.userService.storedId;
  }
}
