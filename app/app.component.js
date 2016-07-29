import { Component } from '@angular/core';
import { TicketListComponent } from './tickets/ticket-list.component';

@Component({
  directives: [TicketListComponent],
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {}
