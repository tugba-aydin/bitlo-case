import { BalanceModel } from "../balance.model";
import { BaseResponse } from "./base.response";

export interface BalanceResponse {
    base: BaseResponse,
    balances: BalanceModel[]
}