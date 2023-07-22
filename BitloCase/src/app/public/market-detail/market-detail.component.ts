import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MarketModel } from 'src/app/models/market.model';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-market-detail',
  templateUrl: './market-detail.component.html',
  styleUrls: ['./market-detail.component.css']
})

export class MarketDetailComponent {

  marketCode:string;
  market:MarketModel;
  constructor(private activatedRoute:ActivatedRoute,private stateService:StateService){}
  
  ngOnInit(){
    this.activatedRoute.params.subscribe((params) => {
      this.marketCode = params['marketCode'];
    });
    this.stateService.market.subscribe((data)=>{
      this.market = data as MarketModel;
    });
  }
}
