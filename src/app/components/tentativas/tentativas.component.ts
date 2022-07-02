import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.sass']
})
export class TentativasComponent implements OnInit {


  fillOne: string = "red";
  fillTwo: string = "red";
  fillThree: string = "red";
  public tentativasRestantes: number = 3;

  constructor() {
    this.handleTentativas();
  }

  ngOnInit(): void {
  }


  handleTentativas(): void {
    if (this.tentativasRestantes === 3) {
      this.fillOne = "red";
      this.fillTwo = "red";
      this.fillThree = "red";
    } else if (this.tentativasRestantes === 2) {
      this.fillOne = "black";
      this.fillTwo = "red";
      this.fillThree = "red";

    } else if (this.tentativasRestantes === 1) {
      this.fillOne = "black";
      this.fillTwo = "black";
      this.fillThree = "red";
    }
    else if (this.tentativasRestantes === 0) {
      this.fillOne = "black";
      this.fillTwo = "black";
      this.fillThree = "black";
    }
  }

}
