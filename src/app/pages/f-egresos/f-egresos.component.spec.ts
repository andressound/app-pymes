import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FEgresosComponent } from './f-egresos.component';

describe('FEgresosComponent', () => {
  let component: FEgresosComponent;
  let fixture: ComponentFixture<FEgresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FEgresosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FEgresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
