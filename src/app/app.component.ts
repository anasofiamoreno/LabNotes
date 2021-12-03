import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { state } from './interfaces/interfaces';
import {
  Auth,
  User,
  onAuthStateChanged,
} from '@angular/fire/auth';
import { Observable, take } from 'rxjs';





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
  }

  constructor(private auth: Auth) {
    this.user$ = new Observable((observer: any) =>
    onAuthStateChanged(auth, observer)
  );
  }

  
  
  

 async ngOnInit(  ): Promise<void> {

   const user = await this.getUser()
   this.userState.email = user?.email
   this.userState.log = user ? true : false
  }
    

  async getUser(): Promise<User | null> {
    return await this.user$.pipe(take(1)).toPromise();
  }

  fnUpdateLogOut(){
    this.userState = {
      log: false,
      email: ''
    }
  }

  fnUpdateLogIn( user: state){
  this.userState = {log: user.log, email: user.email}  
  
  }

  
}
