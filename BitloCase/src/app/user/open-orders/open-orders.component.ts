import { Component } from '@angular/core';
import { OpenOrderResponse } from 'src/app/models/responses/oper-order.response';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-open-orders',
  templateUrl: './open-orders.component.html',
  styleUrls: ['./open-orders.component.css']
})
export class OpenOrdersComponent {

  openOrder: OpenOrderResponse = {} as OpenOrderResponse;

  constructor(private authService: AuthService) { }
  
  ngOnInit() {
    this.getOpenOrders();
  }
  
  getOpenOrders() {
    this.authService.openOrders().subscribe((data) => {
      if (data) {
        this.openOrder.openOrders = data.openOrders
      }
    })
  }
}
