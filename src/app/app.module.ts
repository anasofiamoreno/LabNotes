import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesModule } from './Notes/notes.module';
import { PageComponent } from './pages/Page/page.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { WellcomeComponent } from './pages/wellcome/wellcome.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BackComponent } from './pages/back/back.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LogInComponent,
    WellcomeComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotesModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
