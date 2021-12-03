import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { signInWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { state } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email: string = ""
  password: string = ""

  @Output() logIn: EventEmitter<state> = new EventEmitter() 

  userState: state = {
    log: null,
    email: ''
  }

  constructor(private auth: Auth) { }

  ngOnInit(): void {
  }

  async fnMakeLogin( event: any ){
    event.preventDefault()
    await this.emailLogin(this.email, this.password)
    .then(data => {
      this.userState = {log: true, email:data.user.email }
      this.logIn.emit( this.userState)
    })
    .catch(()=> {this.email = 'Correo o Contraseña Equivocada'})
  
  }

  async emailLogin(email: string, password: string)
  : Promise<any> {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

}
