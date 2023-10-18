import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './reservations/reservations.component';
import { HomeComponent } from './home/home.component';
import { ModaleComponent } from './modale/modale.component';
import { PizzeRosseComponent } from './pizze-rosse/pizze-rosse.component';
import { PizzeBiancheComponent } from './pizze-bianche/pizze-bianche.component';
import { FocacceComponent } from './focacce/focacce.component';
import { BevandeComponent } from './bevande/bevande.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'reservations', component: PizzeRosseComponent },
  { path: 'reservations/pizze-rosse', component: PizzeRosseComponent },
  { path: 'reservations/pizze-bianche', component: PizzeBiancheComponent },
  { path: 'reservations/focacce', component: FocacceComponent },
  { path: 'reservations/bevande', component: BevandeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
