import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html'
})

export class ReposComponent implements OnChanges {
  @Input() searchValue = '';
  @Input() starred!:boolean;

  loading = false;
  response = []

  ngOnChanges(changes: SimpleChanges) {
    this.loading = true;
    let url = this.starred ? `https://api.github.com/users/${this.searchValue}/starred` : `https://api.github.com/users/${this.searchValue}/repos?per_page=50`

    fetch(url)
      .then(response => response.json())
      .then(data => {
          this.response = data
          this.loading = false;
      })
  }
}
