import { Component } from '@angular/core';
import { MeModel } from 'src/app/models/me.model';
import { MeResponse } from 'src/app/models/responses/me.response';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profileResponse: MeResponse = {} as MeResponse;
  isLogin: boolean;
  profile: MeModel = {} as MeModel;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) this.isLogin = true;
    else this.isLogin = false;
    this.getProfileInformation();
  }

  getProfileInformation() {
    this.authService.me().subscribe((data) => {
      if (data) {
        this.profileResponse.me = data.me;
        this.profile = data.me;
      }
    })
  }
}
