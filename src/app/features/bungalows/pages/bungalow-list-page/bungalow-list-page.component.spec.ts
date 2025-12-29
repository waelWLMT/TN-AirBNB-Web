import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BungalowListPageComponent } from './bungalow-list-page.component';

describe('BungalowListPageComponent', () => {
  let component: BungalowListPageComponent;
  let fixture: ComponentFixture<BungalowListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BungalowListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BungalowListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
