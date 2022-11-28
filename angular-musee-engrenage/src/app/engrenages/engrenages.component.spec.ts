import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngrenagesComponent } from './engrenages.component';

describe('EngrenagesComponent', () => {
  let component: EngrenagesComponent;
  let fixture: ComponentFixture<EngrenagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngrenagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngrenagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
