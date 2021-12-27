import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetalhesComponent } from './portfolio-detalhes.component';

describe('PortfolioDetalhesComponent', () => {
  let component: PortfolioDetalhesComponent;
  let fixture: ComponentFixture<PortfolioDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
