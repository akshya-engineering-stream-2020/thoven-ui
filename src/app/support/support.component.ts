import {Component, OnInit} from '@angular/core';
import {ThovenApiService} from '../_service/thoven-api.service';
import {JwtTokenClientService} from '../_service/jwt-token-client.service';
import {Cards} from '../_model/Card';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  cardDetails: Cards[] = [];

  constructor(private apiService: ThovenApiService, private jwtTokenClientService: JwtTokenClientService) {
  }

  ngOnInit(): void {
    this.apiService.getCardDetailsOfUser(this.jwtTokenClientService.getUsername()).subscribe(
      cards => {
        this.cardDetails = cards as Cards[];
        console.log('testing' + this.cardDetails);
        this.cardDetails = this.cardDetails.filter(card => card.cardLevel === 'support');
      }
    );
  }

}
