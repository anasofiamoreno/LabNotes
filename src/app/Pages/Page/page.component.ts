import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Note, state } from 'src/app/interfaces/interfaces';

import {
  Auth,
  signOut,
  signInWithPopup,
  user,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { DataService } from 'src/app/services/data.service';

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
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  get userState() {
    return this.dataService.userState
  }

  notes: Note[] = []


  constructor(private dataService: DataService, private afs: Firestore) {
  
   }

  ngOnInit(): void {

    onSnapshot(
      doc(this.afs, "users", "JJUMyiLGrwhHldfAA2dwl0uGjKi1"), 
      (doc: any) => {
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

        console.log(this.notes)
      });
  
  }

 
   
}
