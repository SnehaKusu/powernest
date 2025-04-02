import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicAdvisoryComponent } from './strategic-advisory.component';

describe('StrategicAdvisoryComponent', () => {
  let component: StrategicAdvisoryComponent;
  let fixture: ComponentFixture<StrategicAdvisoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategicAdvisoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategicAdvisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
