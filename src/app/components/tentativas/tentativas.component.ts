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

  constructor() {
  }

  ngOnInit(): void {
  }

}
