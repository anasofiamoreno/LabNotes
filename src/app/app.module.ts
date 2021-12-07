import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesModule } from './Notes/notes.module';
import { PageComponent } from './pages/page/page.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { WellcomeComponent } from './pages/wellcome/wellcome.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BackComponent } from './pages/back/back.component';
import { NotesComponent } from './pages/notes/notes.component';
import { NoteComponent } from './pages/note/note.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpperBarComponent } from './pages/upper-bar/upper-bar.component';
import { DataService } from './services/data.service';
import { TemplateListNotesComponent } from './pages/template-list-notes/template-list-notes.component';



@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LogInComponent,
    WellcomeComponent,
    BackComponent,
    NotesComponent,
    NoteComponent,
    RegisterComponent,
    UpperBarComponent,
    TemplateListNotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotesModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    CommonModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
