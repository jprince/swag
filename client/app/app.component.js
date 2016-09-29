import { Component } from '@angular/core';
import { HomeComponent } from './home.component';

@Component({
  directives: [HomeComponent],
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {}
