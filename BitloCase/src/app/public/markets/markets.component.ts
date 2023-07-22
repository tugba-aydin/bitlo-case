import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MarketModel } from 'src/app/models/market.model';
import { MarketResponse } from 'src/app/models/responses/market.response';
import { PublicService } from 'src/app/services/public.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent {

  marketResponse: MarketResponse = {} as MarketResponse;
  markets: MarketModel[] = {} as MarketModel[]
  marketsOld: MarketModel[] = {} as MarketModel[]
  counter: number = 0;
  filterText: '';
  isNull: boolean = false;
  totalCount: number;
  highestMarket: string;
  lowestMarket: string;
  currentQuoteGreaterThan10: number;
  currentQuoteSmallThan1: number;
  average:number;
  totalCurrentQuote:number;
  totalMarket:number=0;
  abdDolar:number=0;
  btcTry:number;
  usdtTry:number;
  constructor(private publicService: PublicService, private stateService: StateService, private router: Router) {
  }

  ngOnInit() {
    this.getMarketList();
  }

  getMarketList() {
    this.publicService.getMarkets().subscribe((data) => {
      if (data)
        this.markets = data as MarketModel[];
      this.marketsOld = data as MarketModel[];
      this.setMessageList()
    });
  }

  setMessageList() {
    this.totalCurrentQuote=0;
    this.totalMarket=0;
    this.totalCount = this.markets.filter((x) => x.change24hPercent > 0).length;
    this.highestMarket = this.markets.reduce((a, b) => Number(a.change24hPercent) < Number(b.change24hPercent) ? b : a).marketCode;
    this.lowestMarket = this.markets.reduce((a, b) => Number(a.change24hPercent) > Number(b.change24hPercent) ? b : a).marketCode;
    this.currentQuoteGreaterThan10 = this.markets.filter((x) => Number(x.currentQuote) > 10).length;
    this.currentQuoteSmallThan1 = this.markets.filter((x) => Number(x.currentQuote) < 1).length;
    this.markets.forEach((x)=>{
      this.totalCurrentQuote+=Number(x.currentQuote);
      this.totalMarket++;
    })
    this.average = this.totalCurrentQuote/this.totalMarket;
    this.marketsOld.forEach((x)=>{
      if(x.marketCode=='USDT-TRY') this.usdtTry=x.currentQuote;
      if(x.marketCode=='BTC-TRY') this.btcTry=x.currentQuote;
    })
    this.abdDolar=Number(this.btcTry)/Number(this.usdtTry);
  }

  search(filter) {
    this.markets = this.marketsOld.filter((x) => x.marketCode.includes(filter))
    if (this.markets.length == 0) {
      this.isNull = true
      return;
    }
    else this.isNull = false;
    this.setMessageList()
  }

  goMarketDetail(market) {
    this.stateService.setMarket(market);
    this.router.navigateByUrl('/market/' + market.marketCode);
  }
}
