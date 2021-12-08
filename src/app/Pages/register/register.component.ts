import { Component, OnInit } from '@angular/core';
import { createUserWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { state } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  email: string = ""
  passwordSet: string = ""
  passwordConfirm: string = ""
  alert: string = ""

  //@Output() logIn: EventEmitter<state> = new EventEmitter() 

  userState: state = {
    log: null,
    email: ''
  }

  constructor(private auth: Auth) { }

  ngOnInit(): void {
  }

  fnMakeRegister(){
  
    if(!this.email){
      this.alert = "Empty Email"
      return
    }
    if(!this.passwordSet){
      this.alert = "Empty Password";
      return 
    }
    if(this.passwordSet.length <= 7){
      this.alert = "Short Password";
      return 
    }
    if(this.passwordSet != this.passwordConfirm){
      this.alert = "Passwords dont match";
      return 
    }
    
      this.emailSignUp(this.email,this.passwordSet)
      .then(data => {
        window.location.pathname = '/notes'
      })
      .catch( error => this.alert = error)
  
  }

  async emailSignUp(email: string, password: string): Promise<void> {

   const credential = await createUserWithEmailAndPassword(
     this.auth,
      email,
      password
    );
  }

}
