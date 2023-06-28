import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionResultComponent } from './accordion-result.component';

describe('AccordionResultComponent', () => {
  let component: AccordionResultComponent;
  let fixture: ComponentFixture<AccordionResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
