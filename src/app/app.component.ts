import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  searchValue!:string
  search(ev:string) {
    this.searchValue = ev;
  }
}
