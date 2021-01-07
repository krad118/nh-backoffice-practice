import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizatedInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.getToken();
    const newrequest = request.clone({
      setHeaders: {
        'Authorization': token
      }
    })
    return next.handle(newrequest);
  }

  getToken(): string {
    const token = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjA5OTg1Njg5LCJlbWFpbCI6ImpjcmFtaXJlenRlbGxvQGdtYWlsLmNvbSJ9.HHLn4HtasIl_XymWH6j1-C18gBob4cKn4LQtkXgJYSI';
    return token;
  }
}
