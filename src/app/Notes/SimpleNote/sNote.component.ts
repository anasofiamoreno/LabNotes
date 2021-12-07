import { Component } from '@angular/core';

import {
  doc,
  Firestore,
  setDoc,
  updateDoc
} from '@angular/fire/firestore';
import { Title } from "@angular/platform-browser";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-snote',
  templateUrl: 'sNote.component.html',
  styleUrls: ['sNote.component.css']
})

export class SnoteComponent {

  id: string = "nota"

  idUser: string = ""

  title: string = ''

  content: string = ''

  get userState() {
    return this.dataService.userState
  }

  constructor(private db: Firestore, private dataService: DataService){}

  async fnMakeNewNote(){

    this.idUser = typeof this.userState.id == 'string' ? this.userState.id : 'noData'
    const date: string = Date.now().toString()
    //const dateNote: string = `${date.getDay().toString()}/${date.getMonth().toString()}/${date.getFullYear().toString()} ${date.getHours().toString()}:${date.getMinutes().toString()}:${date.getSeconds().toString()}` 
    

    await updateDoc(doc(this.db, "users", this.idUser), {
      [date]: {
        title: this.title,
        content: this.content,
      }
    });
  }

}