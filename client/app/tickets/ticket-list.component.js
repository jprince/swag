import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ForStoryPointPipe } from './for-story-point.pipe';

@Component({
  inputs: ['tickets', 'selectedStoryPoint'],
  pipes: [ForStoryPointPipe],
  selector: 'ticket-list',
  templateUrl: './ticket-list.component.html'
})

export class TicketListComponent {}
