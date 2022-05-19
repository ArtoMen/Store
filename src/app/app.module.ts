import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { uk_UA } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import uk from '@angular/common/locales/uk';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzButtonModule} from "ng-zorro-antd/button";

registerLocaleData(uk);

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: uk_UA }],
  bootstrap: [AppComponent]
})
export class AppModule { }
