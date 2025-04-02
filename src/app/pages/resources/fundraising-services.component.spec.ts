import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraisingServicesComponent } from './fundraising-services.component';

describe('FundraisingServicesComponent', () => {
  let component: FundraisingServicesComponent;
  let fixture: ComponentFixture<FundraisingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundraisingServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundraisingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
