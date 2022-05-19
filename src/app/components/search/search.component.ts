import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  value!:string
  @Output() searchValue: EventEmitter<string> = new EventEmitter()

  search() {
    this.searchValue.emit(this.value)
  }

}
