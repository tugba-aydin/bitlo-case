import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MarketModel } from '../models/market.model';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private marketSubject = new BehaviorSubject<MarketModel>(null);
  market = this.marketSubject.asObservable();

  setMarket(marketModel: MarketModel) {
    const market = marketModel;
    this.marketSubject.next(market);
  }

  isLogged(){
    const isLogin = localStorage.getItem('token');
    if(isLogin) return true;
    return false;
  }

  getToken(){
    const token = localStorage.getItem('token');
    if(token) return token;
    else return null;
  }
}
