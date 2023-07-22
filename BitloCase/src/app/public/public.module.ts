import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MarketsComponent } from './markets/markets.component';
import { MarketDetailComponent } from './market-detail/market-detail.component';
import { PublicRoutingModule } from './public-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    MarketsComponent,
    MarketDetailComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
