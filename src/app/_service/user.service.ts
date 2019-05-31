import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  storedId: any

  constructor(private http: HttpClient) { }
  
  getUser(user){
    return this.http.get(
      'http://localhost:51036/AssetServ.svc/emp/employees/' + user)
  }
  
  getInfo(userID) {
	  return this.http.get('http://localhost:51036/AssetServ.svc/emp/employee/' + userID)
  }
  // getID(id) {
  //   //return of(this.storedId);
  //   return this.storedId;
  // }
  setId(id) {
    this.storedId = id;
    localStorage.setItem('storedId', id);
    return this.storedId;
  }
  
}
