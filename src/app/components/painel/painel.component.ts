import { Component, OnInit, Output } from '@angular/core';
import { Frase } from "../../shared/frase.model";
import { FRASES } from "./frases-mock";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.sass']
})
export class PainelComponent implements OnInit {

  public instrucao: string = "Traduza a seguinte frase:";
  public frases: Frase[] = FRASES;
  public resposta: string = "";
  public rodada: number = 0;
  public fraseRodada: Frase = this.frases[0];
  public progresso: number;
  public campoResposta: string = "";

  constructor() {
    this.progresso = 0;
    this.updateAnswer();
  }

  ngOnInit(): void {
  }

  getValue(e: Event): void {
    this.resposta = (<HTMLInputElement>e.target).value;
  }

  checkAnswer(): void {
    if (this.resposta.trim().toLowerCase() === this.fraseRodada.frasePtBr.toLowerCase()) {
      this.rodada = this.rodada + 1;
      this.updateAnswer();
      this.progresso = this.progresso + (100 / this.frases.length);
    }
    else {

    }
  }
  updateAnswer(): void {
    this.fraseRodada = this.frases[this.rodada];
    this.resposta = "";
  }
}

