import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncaoSonecaPage } from './funcao-soneca.page';

describe('FuncaoSonecaPage', () => {
  let component: FuncaoSonecaPage;
  let fixture: ComponentFixture<FuncaoSonecaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncaoSonecaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncaoSonecaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
