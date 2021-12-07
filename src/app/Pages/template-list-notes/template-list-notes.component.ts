import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-list-notes',
  templateUrl: './template-list-notes.component.html',
  styleUrls: ['./template-list-notes.component.css']
})
export class TemplateListNotesComponent implements OnInit {

  @Input() title: string | unknown = 'Title'
  @Input() content: string| unknown = 'Contente of the Note'
  @Input() status: string = 'Create'
  @Input() date: string | unknown = '01/12/2021'

  constructor() { }

  ngOnInit(): void {
  }

}
