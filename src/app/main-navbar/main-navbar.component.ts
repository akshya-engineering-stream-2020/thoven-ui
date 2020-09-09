import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  selectedTab: string;

  constructor(private router: Router) { }

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

}
