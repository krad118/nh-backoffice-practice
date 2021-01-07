import { Component } from '@angular/core';
import { AuthorizatedStorageService } from 'src/app/core/services/authorizated-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nh-backoffice-practice';
  constructor(
    private authStorage: AuthorizatedStorageService
  ) {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjA5OTkwNjAyLCJlbWFpbCI6ImpjcmFtaXJlenRlbGxvQGdtYWlsLmNvbSJ9.7NUGiMLg7TKbwy2Oa3Jrw7MZCOp_Y5H8BrY2CIypEZo';
    this.authStorage.setTokenStorage(token);
  }
}
