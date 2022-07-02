import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {


  public gameRunning: boolean = true;
  public endGame: string = "";


  finishGame(tipo: string): void {
    this.gameRunning = false
    this.endGame = tipo;
  }
  restartGame(): void {
    this.gameRunning = true;
    this.endGame = "";
  }
}
