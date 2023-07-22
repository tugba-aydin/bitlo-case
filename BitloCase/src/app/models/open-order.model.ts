export interface OpenOrderModel {
    marketCode: string,
    orderSide: string,
    orderDate: Date,
    price: number,
    orderAmount: number,
    fillAmount: number
}