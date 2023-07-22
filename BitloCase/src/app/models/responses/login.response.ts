import { BaseResponse } from "./base.response";

export interface LoginResponse {
    code:number;
    message:string;    
    token?: string;
}