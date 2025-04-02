import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentOptimizationServicesComponent } from './talent-optimization-services.component';

describe('TalentOptimizationServicesComponent', () => {
  let component: TalentOptimizationServicesComponent;
  let fixture: ComponentFixture<TalentOptimizationServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentOptimizationServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentOptimizationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
