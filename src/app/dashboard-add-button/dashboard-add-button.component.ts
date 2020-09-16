import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Cards} from '../_model/Card';
import {Group} from '../_model/Group';
import {ThovenApiService} from '../_service/thoven-api.service';
import {JwtTokenClientService} from '../_service/jwt-token-client.service';
import {UserDetails} from '../_model/User';

@Component({
  selector: 'app-dashboard-add-button',
  templateUrl: './dashboard-add-button.component.html',
  styleUrls: ['./dashboard-add-button.component.scss']
})
export class DashboardAddButtonComponent implements OnInit {
  @Input() level?: string;

  userDetails = new UserDetails();
  cardModel = new Cards();
  groupModel = new Group();
  formGroupModel = new Group();
  groupModels: Group[] = [];
  userLevels = ['none', 'feature', 'tribe', 'support'];
  featureLevel = ['none', 'feature'];
  tribeLevel = ['none', 'tribe'];
  supportLevel = ['none', 'support'];

  constructor(private modalService: NgbModal, private apiService: ThovenApiService,
              private jwtTokenClientService: JwtTokenClientService) {
  }

  ngOnInit(): void {
    this.apiService.getUserInfoByUsername(this.jwtTokenClientService.getUsername()).subscribe(
      user => {
        this.userDetails = user;
        this.apiService.getAllGroupsOfUser(this.userDetails).subscribe(
          groups => {
            this.groupModels = groups as Group[];
          }
        );
      }
    );

    if (this.level === 'feature') {
      this.userLevels = this.featureLevel;
    } else if (this.level === 'tribe') {
      this.userLevels = this.tribeLevel;
    } else if (this.level === 'support') {
      this.userLevels = this.supportLevel;
    }
  }

  openScrollableContent(addNewCard): void {
    this.modalService.open(addNewCard, {scrollable: true});
  }

  onSubmitCreateCard() {
    this.apiService.getGroupByGroupName(this.formGroupModel.groupName).subscribe(
      group => {
        this.groupModel = group as Group;
        this.cardModel.groupInfo = this.groupModel;
        this.apiService.getUserInfoByUsername(this.jwtTokenClientService.getUsername()).subscribe(
          user => {
            this.userDetails = user;
            this.cardModel.creatorInfoId = this.userDetails.userInfoId;
            this.apiService.createCard(this.cardModel).subscribe(
              card => {
                console.log(card, 'success');
              }
            );
          }
        );
      }
    );
  }

}
