import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionHalfComponent } from './description-half.component';

describe('DescriptionHalfComponent', () => {
  let component: DescriptionHalfComponent;
  let fixture: ComponentFixture<DescriptionHalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionHalfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
