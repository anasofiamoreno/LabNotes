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

  get notes() {
    return this.dataService.notes
  }

  idUser: string = ''

  


  constructor(private dataService: DataService, private afs: Firestore) {
  
   }

  ngOnInit(): void {
    
  
  }

 
   
}
