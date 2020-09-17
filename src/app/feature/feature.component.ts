import {Component, OnInit} from '@angular/core';
import {Cards} from '../_model/Card';
import {ThovenApiService} from '../_service/thoven-api.service';
import {JwtTokenClientService} from '../_service/jwt-token-client.service';
import {UserDetails} from '../_model/User';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  cardDetails: Cards[] = [];
  saveCardDetail = new Cards();
  userDetails = new UserDetails();
  isShortUrlGenerated: boolean;
  level = 'feature';
  shortUrl: string;
  baseUrl: string;

  constructor(private modalService: NgbModal, private apiService: ThovenApiService,
              private jwtTokenClientService: JwtTokenClientService) {
    this.isShortUrlGenerated = false;
    this.shortUrl = '';
    this.baseUrl = 'http://localhost:8888/thoven/';
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

  openScrollableContent(openShortUrl, cardDetail): void {
    this.modalService.open(openShortUrl, {scrollable: true});
    this.setSaveCardDetail(cardDetail);
    if (cardDetail.cardShortUrl === null) {
      this.isShortUrlGenerated = false;
    } else {
      this.isShortUrlGenerated = true;
      this.shortUrl = this.baseUrl + cardDetail.groupInfo.groupName + '/' + cardDetail.cardLevel + '/'
        + cardDetail.cardShortUrl;
    }
  }

  generateShortUrl() {
    console.log(this.getSaveCardDetail().cardInfoId);
    this.apiService.generateShortUrl(this.getSaveCardDetail().cardInfoId, this.getSaveCardDetail().cardUrl)
      .subscribe(url => console.log('url', url));

  }

  setSaveCardDetail(cardDetail) {
    this.saveCardDetail = cardDetail;
  }

  getSaveCardDetail() {
    return this.saveCardDetail;
  }

}
