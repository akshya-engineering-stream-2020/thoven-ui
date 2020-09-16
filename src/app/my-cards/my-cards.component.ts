import {Component, OnInit} from '@angular/core';
import {ThovenApiService} from '../_service/thoven-api.service';
import {JwtTokenClientService} from '../_service/jwt-token-client.service';
import {Cards} from '../_model/Card';
import {UserDetails} from '../_model/User';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.scss']
})
export class MyCardsComponent implements OnInit {

  cardDetails: Cards[] = [];
  userDetails = new UserDetails();

  constructor(private apiService: ThovenApiService, private jwtTokenClientService: JwtTokenClientService) {
  }

  ngOnInit(): void {
    this.apiService.getUserInfoByUsername(this.jwtTokenClientService.getUsername()).subscribe(
      user => {
        this.userDetails = user;
        this.apiService.getAllCardsOfUser(this.userDetails).subscribe(
          cards => {
            this.cardDetails = cards as Cards[];
          }
        );
      }
    );
  }

}
