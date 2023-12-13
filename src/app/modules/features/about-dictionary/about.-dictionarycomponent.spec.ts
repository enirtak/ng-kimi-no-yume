import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDictionaryComponent } from './about-dictionary.component';

describe('AboutComponent', () => {
  let component: AboutDictionaryComponent;
  let fixture: ComponentFixture<AboutDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDictionaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
