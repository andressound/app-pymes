import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIngresosComponent } from './f-ingresos.component';

describe('FIngresosComponent', () => {
  let component: FIngresosComponent;
  let fixture: ComponentFixture<FIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FIngresosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
