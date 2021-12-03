import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateListNoteComponent } from './template-list-note.component';

describe('TemplateListNoteComponent', () => {
  let component: TemplateListNoteComponent;
  let fixture: ComponentFixture<TemplateListNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateListNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateListNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
