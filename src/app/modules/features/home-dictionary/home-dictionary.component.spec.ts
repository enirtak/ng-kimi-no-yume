import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDictionaryComponent } from './home-dictionary.component';

describe('HomeDictionaryComponent', () => {
  let component: HomeDictionaryComponent;
  let fixture: ComponentFixture<HomeDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDictionaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
