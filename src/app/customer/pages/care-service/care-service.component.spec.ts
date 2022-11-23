import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareServiceComponent } from './care-service.component';

describe('CareServiceComponent', () => {
  let component: CareServiceComponent;
  let fixture: ComponentFixture<CareServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
