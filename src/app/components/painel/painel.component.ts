import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from "../../shared/frase.model";
import { FRASES } from "./frases-mock";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.sass']
})
export class PainelComponent implements OnInit, OnDestroy {

  @Output() public finishGame = new EventEmitter()

  public instrucao: string = "Traduza a seguinte frase:";
  public frases: Frase[] = FRASES;
  public resposta: string = "";
  public rodada: number = 0;
  public fraseRodada: Frase = this.frases[0];
  public progresso: number = 0;
  public campoResposta: string = "";
  public tentativasRestantes: number = 3;

  constructor() {
  }

  ngOnInit(): void {
  }

  getValue(e: Event): void {
    this.resposta = (<HTMLInputElement>e.target).value;
  }

  checkAnswer(): void {
    if (this.resposta.trim().toLowerCase() === this.fraseRodada.frasePtBr.toLowerCase()) {
      this.rodada++;
      this.updateAnswer();
      this.progresso = this.progresso + (100 / this.frases.length);
      if (this.rodada == this.frases.length) {
        this.finishGame.emit('win')
      }
    }
    else {
      this.tentativasRestantes--;
      if (this.tentativasRestantes < 0) {
        this.finishGame.emit('defeat')
      }
    }
  }
  updateAnswer(): void {
    this.fraseRodada = this.frases[this.rodada];
    this.resposta = "";
  }

  ngOnDestroy(): void {
    this.instrucao = "Traduza a seguinte frase:";
    this.frases = FRASES;
    this.resposta = "";
    this.rodada = 0;
    this.fraseRodada = this.frases[0];
    this.progresso = 0;
    this.campoResposta = "";
    this.tentativasRestantes = 3;
  }

}

