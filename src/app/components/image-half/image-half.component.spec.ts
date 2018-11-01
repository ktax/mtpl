import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageHalfComponent } from './image-half.component';

describe('ImageHalfComponent', () => {
  let component: ImageHalfComponent;
  let fixture: ComponentFixture<ImageHalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageHalfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
