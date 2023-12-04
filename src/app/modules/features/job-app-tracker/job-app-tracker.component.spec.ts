import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAppTrackerComponent } from './job-app-tracker.component';

describe('JobAppTrackerComponent', () => {
  let component: JobAppTrackerComponent;
  let fixture: ComponentFixture<JobAppTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAppTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobAppTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
