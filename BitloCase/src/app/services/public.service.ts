import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MarketResponse } from '../models/responses/market.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private apiUrl = environment.base_api_url;

  constructor(private httpClient: HttpClient) {
   }

   getMarkets():Observable<MarketResponse>{
    return this.httpClient.get<MarketResponse>(this.apiUrl+'markets');
   }
}
