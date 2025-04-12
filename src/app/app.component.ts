import { Component } from '@angular/core';

import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent {
  public readonly spinkit = Spinkit;
}
