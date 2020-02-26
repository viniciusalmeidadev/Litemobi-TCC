import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Linha342Page } from './linha342.page';

describe('Linha342Page', () => {
  let component: Linha342Page;
  let fixture: ComponentFixture<Linha342Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Linha342Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Linha342Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
