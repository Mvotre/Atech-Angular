import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html'
})

export class RepoComponent {
  @Input() repo!:any

  date(val:string) { return val.split("T")[0] };

}
