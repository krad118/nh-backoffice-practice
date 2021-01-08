import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = `${environment.apiUrl}auth/login/`;
  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<any> {
    const data = {
      username: username,
      password: password
    }
    return this.http.post<any>(`${this.apiUrl}`, data);
  }
}
