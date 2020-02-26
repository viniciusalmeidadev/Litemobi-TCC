import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Linha341Page } from './linha341.page';

describe('Linha341Page', () => {
  let component: Linha341Page;
  let fixture: ComponentFixture<Linha341Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Linha341Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Linha341Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
