import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    ContactComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
