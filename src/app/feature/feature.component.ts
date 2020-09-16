import {Component, OnInit} from '@angular/core';
import {Cards} from '../_model/Card';
import {ThovenApiService} from '../_service/thoven-api.service';
import {JwtTokenClientService} from '../_service/jwt-token-client.service';
import {UserDetails} from '../_model/User';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  cardDetails: Cards[] = [];
  userDetails = new UserDetails();
  level = 'feature';

  constructor(private apiService: ThovenApiService, private jwtTokenClientService: JwtTokenClientService) {
  }

  ngOnInit(): void {
    this.apiService.getUserInfoByUsername(this.jwtTokenClientService.getUsername()).subscribe(
      user => {
        this.userDetails = user;
        this.apiService.getAllCardsOfUser(this.userDetails).subscribe(
          cards => {
            this.cardDetails = cards as Cards[];
            this.cardDetails = this.cardDetails.filter(card => card.cardLevel === 'feature');
          }
        );
      }
    );
  }

}
