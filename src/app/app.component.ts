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
  ) {}
}
