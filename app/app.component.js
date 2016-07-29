import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { TicketListComponent } from './tickets/ticket-list.component';
import { TicketService } from './tickets/ticket.service';

@Component({
  directives: [TicketListComponent],
  providers: [HTTP_PROVIDERS, TicketService],
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {}
