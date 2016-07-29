// https://jira.arcadiasolutions.com/rest/api/latest/search?jql=filter=13934&fields=customfield_10002,issuetype,key,summary&maxResults=1000
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
      .get('./api/tickets.json')
      .map((response) => response.json().issues)
      .catch(this.handleError);
  }

  handleError(error: Response) {
    return Observable.throw(error || 'Server error')
  }
}
