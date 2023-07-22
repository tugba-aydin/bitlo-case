import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { BalancesComponent } from './balances/balances.component';
import { OpenOrdersComponent } from './open-orders/open-orders.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginGuard } from '../guard/login.guard';

const routes: Routes = [
  { path: 'profil', component: ProfileComponent },
  { path: 'profil/bakiyeler', component: BalancesComponent, canActivate: [LoginGuard] },
  { path: 'profil/acik-emirler', component: OpenOrdersComponent, canActivate: [LoginGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
