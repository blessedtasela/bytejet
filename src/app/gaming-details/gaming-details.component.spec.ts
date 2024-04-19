import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingDetailsComponent } from './gaming-details.component';

describe('GamingDetailsComponent', () => {
  let component: GamingDetailsComponent;
  let fixture: ComponentFixture<GamingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamingDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
