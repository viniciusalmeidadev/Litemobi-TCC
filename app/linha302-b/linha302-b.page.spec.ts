import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Linha302BPage } from './linha302-b.page';

describe('Linha302BPage', () => {
  let component: Linha302BPage;
  let fixture: ComponentFixture<Linha302BPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Linha302BPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Linha302BPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
