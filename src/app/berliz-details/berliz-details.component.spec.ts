import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerlizDetailsComponent } from './berliz-details.component';

describe('BerlizDetailsComponent', () => {
  let component: BerlizDetailsComponent;
  let fixture: ComponentFixture<BerlizDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerlizDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BerlizDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
