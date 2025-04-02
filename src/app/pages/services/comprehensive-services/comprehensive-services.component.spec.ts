import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprehensiveServicesComponent } from './comprehensive-services.component';

describe('ComprehensiveServicesComponent', () => {
  let component: ComprehensiveServicesComponent;
  let fixture: ComponentFixture<ComprehensiveServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprehensiveServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprehensiveServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
