import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Linha311Page } from './linha311.page';

describe('Linha311Page', () => {
  let component: Linha311Page;
  let fixture: ComponentFixture<Linha311Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Linha311Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Linha311Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
