import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologicalServicesComponent } from './psychological-services.component';

describe('PsychologicalServicesComponent', () => {
  let component: PsychologicalServicesComponent;
  let fixture: ComponentFixture<PsychologicalServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsychologicalServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsychologicalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
