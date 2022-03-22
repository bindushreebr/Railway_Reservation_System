import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  
  constructor(private http: HttpClient) { }

  // modify this so it points to your API
  public url = 'http://localhost:8083/';

  getpay(): Observable<any>{
    return this.http.get<any>(`${this.url}`);
  }
  
}
