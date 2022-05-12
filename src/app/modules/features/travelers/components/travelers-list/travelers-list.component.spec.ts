/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TravelersListComponent } from './travelers-list.component';

describe('TravelersListComponent', () => {
  let component: TravelersListComponent;
  let fixture: ComponentFixture<TravelersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
