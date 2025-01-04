import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-page-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.css'
})
export class PageListComponent {
  @Input() pages: { title: string; snippet: string; wordcount: number; }[] = [];

}
