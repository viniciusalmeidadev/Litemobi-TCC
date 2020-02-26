import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Linha302APage } from './linha302-a.page';

describe('Linha302APage', () => {
  let component: Linha302APage;
  let fixture: ComponentFixture<Linha302APage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Linha302APage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Linha302APage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
