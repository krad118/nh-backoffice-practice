import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthorizatedStorageService } from '../services/authorizated-storage.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizatedInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private authorizatedStorage:AuthorizatedStorageService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.getToken();
    const newrequest = request.clone({
      setHeaders: {
        'Authorization': token
      }
    });

    return next.handle(newrequest).pipe(
      tap(
        () => {},
        (error: any) => {
          if (error.status === 401) {
            this.router.navigate(['/auth/login'])
          }
          return;
        }
      )
    );
  }

  getToken(): string {
    const token = this.authorizatedStorage.getTokenStorage();
    return `${environment.authHeaderPrefix} ${token}`;
  }
}
