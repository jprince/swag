import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { DropdownComponent } from './general/dropdown.component';
import { TicketListComponent } from './tickets/ticket-list.component';
import { TicketService } from './tickets/ticket.service';

// var _ = require('underscore')._

@Component({
  directives: [DropdownComponent, TicketListComponent],
  providers: [HTTP_PROVIDERS, TicketService],
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  constructor(ticketService: TicketService) {
    this._ticketService = ticketService
    this.fibonacciValues = ['', 1, 2, 3, 5, 8, 13, 21]
  }

  ngOnInit() {
    this.allTickets = this.tickets = this._ticketService.getTickets()
  }

  selectedStoryPointChanged(event) {
    this.selectedStoryPoint = event.value
  }
}
