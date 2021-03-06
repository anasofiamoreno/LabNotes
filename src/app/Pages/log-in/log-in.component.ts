import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { signInWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { state } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email: string = ""
  password: string = ""
  alert: string =''

  userState: state = {
    log: null,
    email: ''
  }

  constructor(private auth: Auth, private dataService: DataService) {}

  ngOnInit(): void {
  }

  async fnMakeLogin( event: any ){

    event.preventDefault()

    if(!this.email){
      this.alert = "Empty Email"
      return
    }
    if(!this.password){
      this.alert = "Empty Password";
      return 
    }
    if(this.password.length <= 7){
      this.alert = "Short Password";
      return 
    }
    
    await this.emailLogin(this.email, this.password)
    .then(data => {
      this.userState = {log: true, email:data.user.email }
      //this.logIn.emit( this.userState)
      this.dataService.fnUpdateLogIn(this.userState)
      window.location.pathname = '/notes'
    })
    .catch(()=> {this.alert = 'Wrong email or password'})
  
  
  }

  fnGoRegister(){
    window.location.pathname = '/register'
  }

  async emailLogin(email: string, password: string)
  : Promise<any> {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

}
