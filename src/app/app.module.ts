import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesModule } from './Notes/notes.module';
import { PageComponent } from './Pages/Page/page.component';
import { LogInComponent } from './Pages/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
