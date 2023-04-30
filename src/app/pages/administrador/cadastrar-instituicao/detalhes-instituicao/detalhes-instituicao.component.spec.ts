import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesInstituicaoComponent } from './detalhes-instituicao.component';

describe('DetalhesInstituicaoComponent', () => {
  let component: DetalhesInstituicaoComponent;
  let fixture: ComponentFixture<DetalhesInstituicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesInstituicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
