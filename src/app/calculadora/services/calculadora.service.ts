/**
* Serviço responsável por executar as operações da calculadora
*
*@author Igor A G Canini Benatti<igorbenatti@gmail.com>
*@since 1.0.0
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /* DEFINE AS CONSTANTES UTILIZADAS PARA IDENTIFICAR AS OPERAÇÕES DE CÁLCULO */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  constructor() { }

  /**
  * Método que calcula uma operação matemática dados dois números.
  * Suporta as operações: soma, subtração, multiplicação e divisão
  *
  * @param num1 number
  * @param num2 number
  * @param operacao string - Operação a ser executada
  * @return number - Resultado da operação
  */
  calcular(num1: number, num2: number, operacao: string): number{
	let resultado: number; //Armazena resulado da operação

	switch (operacao) {
		case CalculadoraService.SOMA:
			resultado = num1 + num2;
			break;
		case CalculadoraService.SUBTRACAO:
			resultado = num1 - num2;
			break;
		case CalculadoraService.MULTIPLICACAO:
			resultado = num1 * num2;
			break;
		case CalculadoraService.DIVISAO:
			resultado = num1 / num2;
			break;
		default:
			resultado = 0;
			break;
	}

	return resultado;
  }
}
