import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreHrSolutionsComponent } from './core-hr-solutions.component';

describe('CoreHrSolutionsComponent', () => {
  let component: CoreHrSolutionsComponent;
  let fixture: ComponentFixture<CoreHrSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreHrSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreHrSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
