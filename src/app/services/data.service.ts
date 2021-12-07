import { Injectable, OnInit,EventEmitter} from '@angular/core';

import {
  Auth,
  User,
  onAuthStateChanged,
} from '@angular/fire/auth';

import { Observable, take } from 'rxjs';


import { Note, state } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{

  user$: Observable<User | null> | undefined | any

  userState: state = {
    log: null,
    email: "",
    id: ''
  }

  notes: Note[] = []

  constructor() {
 
  }

  ngOnInit(  ){}

  fnUpdateLogOut(){
    this.userState = {
      log: false,
      email: ''
    }
  }

  fnUpdateLogIn( user: state, event?: EventEmitter<any>){
    console.log("llego Servicio", user)
    console.log(event)
    this.userState = {log: user.log, email: user.email, id: user.id}  
  
  }



  fnGetUserStatus(){
    return this.userState
  }

}
