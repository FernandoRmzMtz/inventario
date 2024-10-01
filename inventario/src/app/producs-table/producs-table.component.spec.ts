import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducsTableComponent } from './producs-table.component';

describe('ProducsTableComponent', () => {
  let component: ProducsTableComponent;
  let fixture: ComponentFixture<ProducsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
