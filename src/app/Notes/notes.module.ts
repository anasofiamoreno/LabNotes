import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SnoteComponent } from "./SimpleNote/sNote.component";
import { TemplateListNoteComponent } from './template-list-note/template-list-note.component';


@NgModule({
    declarations: [
        SnoteComponent,
        TemplateListNoteComponent
    ],
    exports: [
        SnoteComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]

})

export class NotesModule {}