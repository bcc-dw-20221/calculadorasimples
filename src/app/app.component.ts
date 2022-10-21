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

  digita(numero: string): void {
    this.tela = this.tela + String(numero);
  }

  calcula(): void {
    this.tela = eval(this.tela)
  }
}
