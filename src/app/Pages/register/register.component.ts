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

  //@Output() logIn: EventEmitter<state> = new EventEmitter() 

  userState: state = {
    log: null,
    email: ''
  }

  constructor(private auth: Auth) { }

  ngOnInit(): void {
  }

  fnMakeRegister(){
    console.log(this.email, this.passwordSet, this.passwordConfirm)
    if(this.passwordSet === this.passwordConfirm){
      this.emailSignUp(this.email,this.passwordSet)
      .then(data => {
        console.log(data)
      })
      .catch( error => console.log(error))
    }else{
      console.log('Algo diferente')
    }
  }

  async emailSignUp(email: string, password: string): Promise<void> {

   const credential = await createUserWithEmailAndPassword(
     this.auth,
      email,
      password
    );
  }

}
