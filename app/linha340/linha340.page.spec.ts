import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Linha340Page } from './linha340.page';

describe('Linha340Page', () => {
  let component: Linha340Page;
  let fixture: ComponentFixture<Linha340Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Linha340Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Linha340Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
