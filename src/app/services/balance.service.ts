import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Balance } from '../models/balance';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  url: string = 'http://localhost:7070/balance';

  constructor(private http:HttpClient) { }

  getData():Observable<Balance[]>{
    return this.http.get<Balance[]>(this.url);
  }
}
