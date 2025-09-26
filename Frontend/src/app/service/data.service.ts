import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environment/environment'
import { UserData } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private headers = new HttpHeaders({
    'x-api-key': environment.apiKey
  });

  constructor(private http: HttpClient) { }

  getProfessionalUsers(): Observable<any> {
    return this.http.get<UserData[]>('http://localhost:4000/api/user', { headers: this.headers })
      .pipe(
        map(users =>
          users
            .filter(user => user.role === 'professional')
            .flatMap(user => user.promocards)
        )
      );
  }

  postUser(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post('http://localhost:4000/api/user', body, { headers: this.headers });
  }
}