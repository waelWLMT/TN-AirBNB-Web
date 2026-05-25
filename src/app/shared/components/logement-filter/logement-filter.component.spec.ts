import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogementFilterComponent } from './logement-filter.component';

describe('LogementFilterComponent', () => {
  let component: LogementFilterComponent;
  let fixture: ComponentFixture<LogementFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogementFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogementFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
