import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatPrescriptionComponent } from './creat-prescription.component';

describe('CreatPrescriptionComponent', () => {
  let component: CreatPrescriptionComponent;
  let fixture: ComponentFixture<CreatPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatPrescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
