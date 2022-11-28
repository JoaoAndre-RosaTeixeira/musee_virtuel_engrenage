import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngrenageInfoComponent } from './engrenage-info.component';

describe('EngrenageInfoComponent', () => {
  let component: EngrenageInfoComponent;
  let fixture: ComponentFixture<EngrenageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngrenageInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngrenageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
