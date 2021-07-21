import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './template/template.module';
import { TemplateComponent } from './template/template/template.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(localePt);

@NgModule({
  declarations: [
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    TemplateModule,
    NgbModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ],
  bootstrap: [TemplateComponent]
})
export class AppModule { }
