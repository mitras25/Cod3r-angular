import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService],
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve garantir que 1 + 4 = 5', () => {
    let result = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(result).toEqual(5);
  });

  it('Deve garantir que 1 - 4 = -3', () => {
    let result = service.calcular(1, 4, CalculadoraService.SUBTACAO);
    expect(result).toEqual(-3);
  });

  it('Deve garantir que 4/2 = 2', () => {
    let result = service.calcular(4, 2, CalculadoraService.DIVISAO);
    expect(result).toEqual(2);
  });

  it('Deve garantir que 2 * 4 = 8', () => {
    let result = service.calcular(2, 4, CalculadoraService.MULTIPLICACAO);
    expect(result).toEqual(8);
  });

  it('Deve retornar zero para operação inválida', () => {
    let result = service.calcular(2, 4, '5');
    expect(result).toEqual(0);
  });
});
