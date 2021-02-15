import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeslistaComponent } from './informeslista.component';

describe('InformeslistaComponent', () => {
  let component: InformeslistaComponent;
  let fixture: ComponentFixture<InformeslistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeslistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeslistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
