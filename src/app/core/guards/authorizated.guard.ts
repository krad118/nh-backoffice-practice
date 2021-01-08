import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizatedStorageService } from '../services/authorizated-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizatedGuard implements CanActivate {
  constructor(
    private router: Router,
    private authorizatedStorage: AuthorizatedStorageService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.hasAccesss();
  }

  hasAccesss(): boolean {
    if (this.authorizatedStorage.getTokenStorage()) {
      return true;
    }
    this.router.navigate(['/auth/login/']);
    return false;
  }
}
