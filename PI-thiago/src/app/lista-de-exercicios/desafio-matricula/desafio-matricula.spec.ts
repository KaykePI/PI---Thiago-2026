import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioMatricula } from './desafio-matricula';

describe('DesafioMatricula', () => {
  let component: DesafioMatricula;
  let fixture: ComponentFixture<DesafioMatricula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesafioMatricula],
    }).compileComponents();

    fixture = TestBed.createComponent(DesafioMatricula);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
