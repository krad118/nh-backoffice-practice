import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizatedStorageService {

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) { }

  tokenStorage(token: string): void {

  }

  getTokenStorage(): any {
    const token = this.storage.get('sessionToken') || null;
    return token;
  }

  setTokenStorage(token: string): void {
    this.storage.set('sessionToken', token);
  }
}
