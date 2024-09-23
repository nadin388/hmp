import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurSchedulesPage } from './our-schedules.page';

describe('OurSchedulesPage', () => {
  let component: OurSchedulesPage;
  let fixture: ComponentFixture<OurSchedulesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSchedulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
