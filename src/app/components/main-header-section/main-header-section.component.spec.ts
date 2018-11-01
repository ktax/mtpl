import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderSectionComponent } from './main-header-section.component';

describe('MainHeaderSectionComponent', () => {
  let component: MainHeaderSectionComponent;
  let fixture: ComponentFixture<MainHeaderSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHeaderSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
