import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoanSubmit } from '../_models/LoanSubmit'
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { LoanDetail } from '../_models/LoanDetail';
import { LoanResolve } from '../_models/LoanResolve';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  storedName: any;
  storedPhone: any;
  storedId: any;
  lastSeenPage:any;
  storedLoanId:any;
  assetId:any;
  
  private loanIdSource = new BehaviorSubject(-1);
  currentLoanId = this.loanIdSource.asObservable();
  private messageSource = new BehaviorSubject('n/a');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }
  
  getUser(user){
    return this.http.get('http://assetmanagementservice.cloudapp.net/AssetServ.svc/emp/employees/' + encodeURIComponent(user));
  }
  
  getInfo<Employee>(userID) {
	  return this.http.get('http://assetmanagementservice.cloudapp.net/AssetServ.svc/emp/employee/' + encodeURIComponent(userID));
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
    this.loanIdSource.next(id);
  }

  createloan(loan: LoanSubmit) {
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post('http://assetmanagementservice.cloudapp.net/AssetServ.svc/lns/loan/submit', '{"form":' + JSON.stringify(loan) + '}', options);
  }
  resolveloan(loan: LoanResolve) {
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post('http://assetmanagementservice.cloudapp.net/AssetServ.svc/lns/loan/resolve', '{"form":' + JSON.stringify(loan) + '}', options);
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  getLoans(id) { // id is the employee id, gets all active loans for that employee
    return this.http.get<LoanDetail[]>('http://assetmanagementservice.cloudapp.net/AssetServ.svc/lns/loans/emp/' + encodeURIComponent(id));
  }
  getLoan(id) { // id is the loan id
    return this.http.get('http://assetmanagementservice.cloudapp.net/AssetServ.svc/lns/loan/' + encodeURIComponent(id));
  }
  getAssetHistory(assetNum) {
    //console.log('encoded assetNum:', encodeURI(assetNum));
    return this.http.get<LoanDetail[]>('http://assetmanagementservice.cloudapp.net/AssetServ.svc/lns/loans/asset/' + encodeURIComponent(assetNum));
  }
}
