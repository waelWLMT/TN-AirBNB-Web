import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLogementDetailsPageComponent } from './public-logement-details-page.component';

describe('PublicLogementDetailsPageComponent', () => {
  let component: PublicLogementDetailsPageComponent;
  let fixture: ComponentFixture<PublicLogementDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicLogementDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicLogementDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
