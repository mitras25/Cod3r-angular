import { CalculadoraService } from './../services/calculadora.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  private num1: string;
  private num2: string;
  private operacao: string;
  private resultado: number;
  private igual: boolean = false;

  constructor(private calculadoraService: CalculadoraService) {}

  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Inicializa todos os operadores para valores padrão
   */
  limpar(): void {
    this.num1 = '0';
    this.num2 = null;
    this.operacao = null;
    this.resultado = null;
    this.igual = false;
  }

  adicionarNumero(numero: string): void {
    if (this.igual) {
      this.resultado = null;
      this.num1 = '0';
      this.igual = false;
    }
    if (this.operacao === null) {
      this.num1 = this.concatenarNumero(this.num1, numero);
    } else {
      this.num2 = this.concatenarNumero(this.num2, numero);
    }
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
    if (numAtual === '0' || numAtual === '' || numAtual === null) {
      numAtual = '';
    }
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }
    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void {
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }
    if (this.num2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.num1),
        parseFloat(this.num2),
        this.operacao
      );
      this.operacao = operacao;
      this.num1 = this.resultado.toString();
      this.num2 = null;
      this.resultado = null;
    }
  }

  calcular(): void {
    if (this.num2 === null || (this.num2 === '0' && this.operacao === '/'))
      return;
    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.num1),
      parseFloat(this.num2),
      this.operacao
    );
    this.igual = true;
    this.operacao = null;
    this.num2 = null;
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora
   */
  get display(): string {
    if (this.resultado !== null) return this.resultado.toString();
    if (this.num2 !== null) return this.num2;
    return this.num1;
  }
}
