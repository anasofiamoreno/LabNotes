import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { state } from 'src/app/interfaces/interfaces';

import {
  Auth,
  signOut,
  signInWithPopup,
  user,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Output() logOut: EventEmitter<state> = new EventEmitter()
  @Output() reenviarLogin: EventEmitter<state> = new EventEmitter()
  
  
  @Input() userState: state ={
    log: false,
    email: ""
  }


  constructor(private auth: Auth) { }

  

  ngOnInit(): void {
  }

  fnMakeLogout(){
    this.emailLogout()
    this.logOut.emit( this.userState )
  }
  
  async emailLogout()
: Promise<any> {
  return await signOut(this.auth,);
}

fnReenviarLogin( event: state ){
  this.reenviarLogin.emit( event )
}

}
