import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgoryFormComponent } from './catgory-form.component';

describe('CatgoryFormComponent', () => {
  let component: CatgoryFormComponent;
  let fixture: ComponentFixture<CatgoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatgoryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatgoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
