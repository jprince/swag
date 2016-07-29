import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TicketComponent } from './ticket.component';
import { TicketService } from './ticket.service';

@Component({
  directives: [TicketComponent],
  selector: 'ticket-list',
  templateUrl: './ticket-list.component.html'
})

export class TicketListComponent {
  constructor(ticketService: TicketService) {
    this._ticketService = ticketService
  }

  ngOnInit() {
    this.tickets = this._ticketService.getTickets()
  }
}
