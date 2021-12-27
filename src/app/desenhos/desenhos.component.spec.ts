import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenhosComponent } from './desenhos.component';

describe('DesenhosComponent', () => {
  let component: DesenhosComponent;
  let fixture: ComponentFixture<DesenhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesenhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
