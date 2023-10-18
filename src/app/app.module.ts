import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PizzeRosseComponent } from './pizze-rosse/pizze-rosse.component';
import { PizzeBiancheComponent } from './pizze-bianche/pizze-bianche.component';
import { FocacceComponent } from './focacce/focacce.component';
import { BevandeComponent } from './bevande/bevande.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ReservationsComponent,
    HomeComponent,
    PizzeRosseComponent,
    PizzeBiancheComponent,
    FocacceComponent,
    BevandeComponent,
    SearchBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
