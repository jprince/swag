import { Component } from '@angular/core';
import { TicketComponent } from './ticket.component';

@Component({
  directives: [TicketComponent],
  selector: 'ticket-list',
  templateUrl: './ticket-list.component.html'
})

export class TicketListComponent {}
