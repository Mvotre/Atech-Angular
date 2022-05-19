import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ReposComponent } from './components/repos/repos.component';
import { FormsModule } from '@angular/forms';
import { RepoComponent } from './components/shared/repo/repo.component';
import { SpinnerComponent } from './components/ui/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ReposComponent,
    RepoComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
