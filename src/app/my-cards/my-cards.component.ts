import {Component, OnInit} from '@angular/core';
import {ThovenApiService} from '../_service/thoven-api.service';
import {JwtTokenClientService} from '../_service/jwt-token-client.service';
import {Cards} from '../_model/Card';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.scss']
})
export class MyCardsComponent implements OnInit {

  cardDetails: Cards[] = [];

  constructor(private apiService: ThovenApiService, private jwtTokenClientService: JwtTokenClientService) {
  }

  ngOnInit(): void {
    this.apiService.getCardDetailsOfUser(this.jwtTokenClientService.getUsername()).subscribe(
      cards => {
        this.cardDetails = cards as Cards[];
        console.log('testing' + this.cardDetails);
        this.cardDetails.forEach(value => console.log('value' + value.cardTitle));
      }
    );
  }

}
