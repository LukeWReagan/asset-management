import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  setId(id) {
    this.storedId = id;
    localStorage.setItem('storedId', id);
    return this.storedId;
  }
  
}
