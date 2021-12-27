import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCapaComponent } from './portfolio-capa.component';

describe('PortfolioCapaComponent', () => {
  let component: PortfolioCapaComponent;
  let fixture: ComponentFixture<PortfolioCapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioCapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
