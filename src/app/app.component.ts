import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { state } from './interfaces/interfaces';
import { Observable, take } from 'rxjs';
import { User } from '@angular/fire/auth';
import {
  Auth,
  onAuthStateChanged,
} from '@angular/fire/auth';
import { DataService } from './services/data.service';







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

  constructor(private auth: Auth, private dataService: DataService) {
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
    this.dataService.fnUpdateLogIn( this.userState,)

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

    console.log('End Load')
    
  }

  async getUser(): Promise<User | null> {
    return await this.user$.pipe(take(1)).toPromise();
  }
  

  
  

 
    

 

 

  
}
