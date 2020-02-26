import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTrackPage } from './map-track.page';

describe('MapTrackPage', () => {
  let component: MapTrackPage;
  let fixture: ComponentFixture<MapTrackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTrackPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
