import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
  @Input() valor = "VND"
  @Output() apertou = new EventEmitter<{ valor: string, qtd: number }>()

  qtd: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  clicou() {
    console.log('clicou')
    this.qtd++
    this.apertou.emit({ valor: this.valor, qtd: this.qtd })
  }

}
