import { Component } from '@angular/core';
import { BalanceModel } from 'src/app/models/balance.model';
import { BalanceResponse } from 'src/app/models/responses/balance.response';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css']
})
export class BalancesComponent {

  balance: BalanceResponse = {} as BalanceResponse;
  showHideCheck: boolean =true;
  balances:BalanceModel[] = {} as BalanceModel[]

  constructor(private authService: AuthService) { }
  
  ngOnInit() {
    this.getBalance();
  }
  
  getBalance() {
    this.authService.balances().subscribe((data) => {
      if (data) {
        this.balance.balances = data.balances;
        this.balances = data.balances;
        this.showHide();
      }
    }
    )
  }
  showHide() {
    if (this.showHideCheck == true) {
      this.balance.balances = this.balances.filter((x) => x.availableAmountTRYValue > 1);
    }
    else this.balance.balances = this.balances;
  }
}
