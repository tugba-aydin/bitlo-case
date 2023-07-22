import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { StateService } from "src/app/services/state.service";

@Injectable()
export class LoginGuard {
  constructor( private router: Router,private stateService:StateService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logged = localStorage.getItem('token');

    if (logged) {
      return true;
    }
    else{
      this.router.navigateByUrl('/hata');
      return false;
    }
    
  }
}