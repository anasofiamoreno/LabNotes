import { Component, OnInit } from '@angular/core';

import { Auth, signOut, } from '@angular/fire/auth';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-upper-bar',
  templateUrl: './upper-bar.component.html',
  styleUrls: ['./upper-bar.component.css']
})

export class UpperBarComponent implements OnInit {

  get userState() {
    return this.dataService.userState
  }

  constructor(private auth: Auth, private dataService: DataService) { }

  ngOnInit(): void {
    
  }

  fnMakeLogout(){
    this.emailLogout()
    window.location.pathname = '/'
  }

  async emailLogout()
  : Promise<any> {
    return await signOut(this.auth,);
  }

}
