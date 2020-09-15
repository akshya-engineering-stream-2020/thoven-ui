import {Component, OnInit} from '@angular/core';
import {Cards} from '../_model/Card';
import {ThovenApiService} from '../_service/thoven-api.service';
import {JwtTokenClientService} from '../_service/jwt-token-client.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  cardDetails: Cards[] = [];

  constructor(private apiService: ThovenApiService, private jwtTokenClientService: JwtTokenClientService) {
  }

  ngOnInit(): void {
    this.apiService.getCardDetailsOfUser(this.jwtTokenClientService.getUsername()).subscribe(
      cards => {
        this.cardDetails = cards as Cards[];
        console.log('testing' + this.cardDetails);
        this.cardDetails = this.cardDetails.filter(card => card.cardLevel === 'feature');
      }
    );
  }

}
