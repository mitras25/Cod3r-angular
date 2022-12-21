import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  static readonly SOMA: string = '+';
  static readonly SUBTACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() {}
  /**
   * metodo para ralizar a operação
   *
   * @param num1 primeiro valor
   * @param num2 segundo valor
   * @param operacao a ser realizada
   * @returns o resultado da operação
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
