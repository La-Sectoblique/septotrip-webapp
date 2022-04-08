/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PointsListComponent } from './points-list.component';

describe('PointsListComponent', () => {
  let component: PointsListComponent;
  let fixture: ComponentFixture<PointsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
