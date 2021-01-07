import { TestBed } from '@angular/core/testing';

import { AuthorizatedStorageService } from './authorizated-storage.service';

describe('AuthorizatedStorageService', () => {
  let service: AuthorizatedStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizatedStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
