import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.sass']
})
export class TentativasComponent implements OnInit, OnChanges {


  @Input() public tentativasRestantes: number = 3;
  fillOne: string = "red";
  fillTwo: string = "red";
  fillThree: string = "red";

  constructor() {

  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.handleTentativas();
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
