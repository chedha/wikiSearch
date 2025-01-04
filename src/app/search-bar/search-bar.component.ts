import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Output() submitter = new EventEmitter<string>();
  term = '';

  onSearch(Event: Event) {
   this.term = (Event.target as HTMLInputElement).value;
   console.log(this.term);
  }

  onSubmit(Event: Event) {
    Event.preventDefault();
    this.submitter.emit(this.term);
  }

}
