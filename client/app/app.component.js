import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { DropdownComponent } from './general/dropdown.component';
import { TicketListComponent } from './tickets/ticket-list.component';
import { TicketService } from './tickets/ticket.service';

@Component({
  directives: [DropdownComponent, TicketListComponent],
  providers: [HTTP_PROVIDERS, TicketService],
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor() {
    this.fibonacciValues = ['', 1, 2, 3, 5, 8, 13, 21]
  }
}
