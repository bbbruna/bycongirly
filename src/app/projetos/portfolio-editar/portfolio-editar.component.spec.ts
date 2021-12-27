import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioEditarComponent } from './portfolio-editar.component';

describe('PortfolioEditarComponent', () => {
  let component: PortfolioEditarComponent;
  let fixture: ComponentFixture<PortfolioEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
