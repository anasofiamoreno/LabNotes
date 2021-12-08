import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Note, state } from './interfaces/interfaces';
import { Observable, take } from 'rxjs';
import { User } from '@angular/fire/auth';
import {
  Auth,
  onAuthStateChanged,
} from '@angular/fire/auth';
import { DataService } from './services/data.service';

import {
  collection,
  doc,
  docData,
  DocumentReference,
  CollectionReference,
  Firestore,
  onSnapshot,
  query,
  where,
  Unsubscribe,
  Query,
  DocumentData,
  collectionData,
  collectionChanges,
  docSnapshots,
} from '@angular/fire/firestore';







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user$: Observable<User | null> | undefined | any

  userState: state = {
    log: null,
    email: "",
    id: ''
  }

  idUser:string =''

  notes: Note[] =[]

  constructor(private auth: Auth, private dataService: DataService, private afs: Firestore) {
    this.user$ = new Observable((observer: any) =>
    onAuthStateChanged(auth, observer)
  );
  }

  async ngOnInit(  ): Promise<void> {
    console.log('Star Load')
    const user = await this.getUser()
    this.userState.email = user?.email
    this.userState.log = user? true : false
    this.userState.id = user?.uid
    console.log(this.userState)
    this.dataService.fnUpdateLogIn( this.userState )
    console.log(this.userState)
    console.log('Midle Load')

    console.log(window.location.pathname)
    switch(window.location.pathname){
      case '/' : this.userState.log ? window.location.pathname = '/note' : window.location.pathname = '/login'
      break
      case '/login' : this.userState.log ? window.location.href = '/notes' : null
      break
      case '/notes' : this.userState.log ? null : window.location.pathname = '/login'
      break
      case '/register' : this.userState.log ? window.location.href = '/notes' : null
      break

  
    }

    this.idUser = typeof this.userState.id == 'string' ? this.userState.id : ''

    this.userState.log ? onSnapshot(
      doc(this.afs, "users", this.idUser), 
      (doc: any) => {
        this.notes =[]
        Object.entries(doc.data()).forEach( (note: any) => {

          const tempNote: Note= {title: note[1].title, content: note[1].content, date: note[0], edited: note[1]?.edited}
          this.notes.push(tempNote)
        })
        this.notes.sort( (a:any, b:any): any => {
          if(a.date > b.date){
            return -1
          }
          if (a.date < b.date) {
            return 1;
          }

          
        })

        this.dataService.notes = this.notes

        console.log(this.notes)
      }) : null
    

    console.log('End Load')
    
  }

  async getUser(): Promise<User | null> {
    return await this.user$.pipe(take(1)).toPromise();
  }
  

  
  

 
    

 

 

  
}
