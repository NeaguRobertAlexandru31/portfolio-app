import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrariComponent } from './orari/orari.component';
import { MapsComponent } from './maps/maps.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'orari', component: OrariComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
