import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthService,private stateService:StateService) { }

  ngOnInit() {
    
  }
  isLogged(){
    return this.stateService.isLogged();
  }
}
