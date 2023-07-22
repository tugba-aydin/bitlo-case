import { MeModel } from "../me.model";
import { BaseResponse } from "./base.response";

export interface MeResponse {
    base: BaseResponse;
    me: MeModel
}