import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment'

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private headers = new HttpHeaders({
    'x-api-key': environment.apiKey
  });

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:4000/api/user', { headers: this.headers });
  }

  getProducts(): Observable<any> {
    return this.http.get('http://localhost:4000/api/product', { headers: this.headers });
  }
}
