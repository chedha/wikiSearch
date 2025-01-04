import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { PageListComponent } from "./page-list/page-list.component";
import { WikipediaService } from './wikipedia.service';
import { Response } from './models/types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchBarComponent, PageListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pages: { title: string; snippet: string; wordcount: number; }[] = [];

  constructor(private wikipedia: WikipediaService) { }

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response: Response) => {
      this.pages = response.query.search;
    });

  }
}
