import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    CarroComprasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
