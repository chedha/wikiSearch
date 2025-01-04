import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from './models/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(term: string): Observable<Response> {
    return this.http.get<Response>(`https://en.wikipedia.org/w/api.php`, {
      params: {
        action: 'query',
        list: 'search',
        format: 'json',
        srsearch: term,
        origin: '*'
      }
    }); // `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${term}`
  }
}
