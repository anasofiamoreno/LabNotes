import { Component } from "@angular/core";

@Component({
  selector: 'app-snote',
  templateUrl: 'sNote.component.html',
  styleUrls: ['sNote.component.css']
})

export class SnoteComponent {

 name: string = 'Nombre de Nota'

 content: string = 'Content of the Note'

}