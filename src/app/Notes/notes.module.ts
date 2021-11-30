import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SnoteComponent } from "./SimpleNote/sNote.component";


@NgModule({
    declarations: [
        SnoteComponent
    ],
    exports: [
        SnoteComponent
    ],
    imports: [
        CommonModule
    ]

})

export class NotesModule {}