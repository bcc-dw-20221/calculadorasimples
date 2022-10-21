import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotaoComponent } from './botao/botao.component';
import { TelaComponent } from './tela/tela.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    TelaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
