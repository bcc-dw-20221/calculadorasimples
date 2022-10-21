import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.css']
})
export class TelaComponent implements OnInit {
  @Input() texto = ""


  constructor() { }

  ngOnInit(): void {
  }

}
