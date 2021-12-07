import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateListNotesComponent } from './template-list-notes.component';

describe('TemplateListNotesComponent', () => {
  let component: TemplateListNotesComponent;
  let fixture: ComponentFixture<TemplateListNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateListNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateListNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
