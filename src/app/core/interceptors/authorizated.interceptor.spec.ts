import { TestBed } from '@angular/core/testing';

import { AuthorizatedInterceptor } from './authorizated.interceptor';

describe('AuthorizatedInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthorizatedInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthorizatedInterceptor = TestBed.inject(AuthorizatedInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
