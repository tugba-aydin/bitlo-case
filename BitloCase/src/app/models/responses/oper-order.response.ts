import { OpenOrderModel } from "../open-order.model";
import { BaseResponse } from "./base.response";

export interface OpenOrderResponse {
    base: BaseResponse,
    openOrders: OpenOrderModel[]
}