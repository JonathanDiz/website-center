import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOfServicePageComponent } from './terms-of-service-page.component';

describe('TermsOfServicePageComponent', () => {
  let component: TermsOfServicePageComponent;
  let fixture: ComponentFixture<TermsOfServicePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsOfServicePageComponent]
    });
    fixture = TestBed.createComponent(TermsOfServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
