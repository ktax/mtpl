import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionWithImageComponent } from './description-with-image.component';

describe('DescriptionWithImageComponent', () => {
  let component: DescriptionWithImageComponent;
  let fixture: ComponentFixture<DescriptionWithImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionWithImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
