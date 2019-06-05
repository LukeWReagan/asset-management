import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoanSubmit } from '../_models/LoanSubmit'
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { LoanDetail } from '../_models/LoanDetail';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  storedName: any;
  storedPhone: any;
  storedId: any;
  lastSeenPage:any;
  storedLoanId:any;
  
  private messageSource = new BehaviorSubject('n/a');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }
  
  getUser(user){
    return this.http.get(
      'http://assetmanagementservice.cloudapp.net/AssetServ.svc/emp/employees/' + user)
  }
  
  getInfo<Employee>(userID) {
	  return this.http.get('http://assetmanagementservice.cloudapp.net/AssetServ.svc/emp/employee/' + userID)
  }
  setName(name) {
    this.storedName = name;
    localStorage.setItem('storedName', name);
    return this.storedName;
  }
  setPhone(ph) {
    this.storedPhone = ph;
    localStorage.setItem('storedPhone', ph);
    return this.storedPhone;
  }
  setId(id) {
    this.storedId = id;
    localStorage.setItem('storedId', id);
    return this.storedId;
  }
  setLoanId(id) {
    this.storedLoanId = id;
    return this.storedLoanId;
  }

  createloan(loan: LoanSubmit){
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post('http://assetmanagementservice.cloudapp.net/AssetServ.svc/lns/loan/submit', '{"form":' + JSON.stringify(loan) + '}', options);
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  getLoans(id) { // id is the employee id, gets all active loans for that employee
    return this.http.get<LoanDetail[]>('http://assetmanagementservice.cloudapp.net/AssetServ.svc/lns/loans/emp/' + id);
  }
  getLoan(id) { // id is the loan id
    return this.http.get('http://assetmanagementservice.cloudapp.net/AssetServ.svc/lns/loan/' + id);
  }
}
