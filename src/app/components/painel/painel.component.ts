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

  constructor() { }

  ngOnInit(): void {
    console.log(this.frases)
  }

}
