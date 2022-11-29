import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngrenageUpdateComponent } from './engrenage-update.component';

describe('EngrenageUpdateComponent', () => {
  let component: EngrenageUpdateComponent;
  let fixture: ComponentFixture<EngrenageUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngrenageUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngrenageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
