import {Component, OnInit} from '@angular/core';
import {User} from '../_model/User';
import {JwtTokenClientService} from '../_service/jwt-token-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userModel = new User();

  constructor(private jwtTokenClientService: JwtTokenClientService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.jwtTokenClientService.generateToken(this.userModel).subscribe(
      token => {
        console.log('tokenn' + token);
        this.jwtTokenClientService.setToken(token);
        this.jwtTokenClientService.setUsername(this.userModel.userName);
        this.router.navigate(['/home/myCards']);
      }
    );
  }

}
