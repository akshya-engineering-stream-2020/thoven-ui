import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {JwtTokenClientService} from '../_service/jwt-token-client.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  selectedTab: string;

  constructor(private router: Router, private jwtTokenClientService: JwtTokenClientService) {
  }

  ngOnInit(): void {
  }

  goDashboardComponent(): void {
    this.selectedTab = 'dashboard';
    this.router.navigate(['home/myCards']);
  }

  goCreateGroupComponent(): void {
    this.selectedTab = 'createGroup';
    this.router.navigate(['home/create-group']);
  }

  goGroupSpaceComponent(): void {
    this.selectedTab = 'groupSpace';
    this.router.navigate(['home/group-space']);
  }

  goRequestGroupComponent(): void {
    this.selectedTab = 'requestGroup';
    this.router.navigate(['home/request-group']);
  }

  goAnalysisComponent(): void {
    this.selectedTab = 'analysis';
    this.router.navigate(['home/analysis']);
  }

  onLogout(): void {
    this.jwtTokenClientService.setToken(null);
    this.router.navigate(['/login']);
  }

}
