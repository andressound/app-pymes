import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionarseComponent } from './sesionarse.component';

describe('SesionarseComponent', () => {
  let component: SesionarseComponent;
  let fixture: ComponentFixture<SesionarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesionarseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesionarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
