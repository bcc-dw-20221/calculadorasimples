import { Component } from '@angular/core';

@Component({
  selector: 'egua',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Égua';
  tela = '';

  botoes: string[] = ['1', '2', '3', '4', '5', '+']

  digita(dados: { valor: string, qtd: number }): void {
    this.tela = this.tela + String(dados.valor);
    console.log(`A tecla ${dados.valor} já foi apertada ${dados.qtd} vezes.`)
  }

  calcula(): void {
    this.tela = eval(this.tela)
  }
}
