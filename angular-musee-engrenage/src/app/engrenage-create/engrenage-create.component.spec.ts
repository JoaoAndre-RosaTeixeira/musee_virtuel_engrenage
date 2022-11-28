import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngrenageCreateComponent } from './engrenage-create.component';

describe('EngrenageCreateComponent', () => {
  let component: EngrenageCreateComponent;
  let fixture: ComponentFixture<EngrenageCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngrenageCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngrenageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
