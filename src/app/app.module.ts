import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/Ui/navbar/navbar.component';
import { FooterComponent } from './componets/Ui/footer/footer.component';
import { RegistrComponent } from './componets/Auth/registr/registr.component';
import { LogInComponent } from './componets/Auth/log-in/log-in.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegistrComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
