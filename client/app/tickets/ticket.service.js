import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TicketService {
  constructor(http: Http) {
    this._http = http
  }

  getTickets() {
    return this._http
      .get('/api/tickets')
      .map((response) => response.json())
      .catch(this.handleError);
  }

  handleError(error: Response) {
    return Observable.throw(error || 'Server error')
  }
}
