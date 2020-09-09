import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {
  @Input() selectedTab: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goMyCardsComponent(): void {
    this.router.navigate(['home/myCards']);
  }

  goFeatureComponent(): void {
    this.router.navigate(['home/feature']);
  }

  goTribeComponent(): void {
    this.router.navigate(['home/tribe']);
  }

  goSupportComponent(): void {
    this.router.navigate(['home/support']);
  }

}
