import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.sass']
})
export class ProgressoComponent implements OnInit {

  constructor() { }

  @Input() public progresso: number = 0;

  ngOnInit(): void {
  }

}
