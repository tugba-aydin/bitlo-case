import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { BalancesComponent } from './balances/balances.component';
import { OpenOrdersComponent } from './open-orders/open-orders.component';
import { LogoutComponent } from './logout/logout.component';
import { UserRoutingModule } from './user-routing.module';
import { PhonePipe } from './profile/phone.pipe';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from '../guard/login.guard';



@NgModule({
  declarations: [
    ProfileComponent,
    BalancesComponent,
    OpenOrdersComponent,
    LogoutComponent,
    PhonePipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  providers:[LoginGuard]
})
export class UserModule { }
