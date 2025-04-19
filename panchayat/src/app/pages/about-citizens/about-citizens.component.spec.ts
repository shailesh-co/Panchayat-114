import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCitizensComponent } from './about-citizens.component';

describe('AboutCitizensComponent', () => {
  let component: AboutCitizensComponent;
  let fixture: ComponentFixture<AboutCitizensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCitizensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCitizensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
