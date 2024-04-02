import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECOPerioperatorioComponent } from './eco-perioperatorio.component';

describe('ECOPerioperatorioComponent', () => {
  let component: ECOPerioperatorioComponent;
  let fixture: ComponentFixture<ECOPerioperatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ECOPerioperatorioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ECOPerioperatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
