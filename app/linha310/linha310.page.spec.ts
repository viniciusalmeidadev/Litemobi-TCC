import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Linha310Page } from './linha310.page';

describe('Linha310Page', () => {
  let component: Linha310Page;
  let fixture: ComponentFixture<Linha310Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Linha310Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Linha310Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
