import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomDetailsComponent } from './ecom-details.component';

describe('EcomDetailsComponent', () => {
  let component: EcomDetailsComponent;
  let fixture: ComponentFixture<EcomDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcomDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
