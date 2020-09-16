import {Component, OnInit} from '@angular/core';
import {ThovenApiService} from '../_service/thoven-api.service';
import {JwtTokenClientService} from '../_service/jwt-token-client.service';
import {UserDetails} from '../_model/User';
import {Group} from '../_model/Group';
import {UserGroup} from '../_model/UserGroup';
import {Cards} from '../_model/Card';

@Component({
  selector: 'app-group-space',
  templateUrl: './group-space.component.html',
  styleUrls: ['./group-space.component.scss']
})

export class GroupSpaceComponent implements OnInit {
  isGroupCardCalled: boolean;
  isGroupMemberCalled: boolean;
  userDetails = new UserDetails();
  ownerGroups: UserGroup[] = [];
  userGroups: UserGroup[] = [];
  cards: Cards[] = [];
  saveGroupInfo = new Group();
  usersOfGroups: UserGroup[] = [];
  saveUsersOfGroups: UserGroup[] = [];

  constructor(private apiService: ThovenApiService, private jwtTokenClientService: JwtTokenClientService) {
    this.isGroupCardCalled = false;
    this.isGroupMemberCalled = false;
  }

  ngOnInit(): void {
    this.apiService.getUserInfoByUsername(this.jwtTokenClientService.getUsername()).subscribe(
      user => {
        this.userDetails = user;
        this.apiService.getAllGroupsAdminDetailsOfUser(this.userDetails).subscribe(
          userGroups => {
            this.ownerGroups = userGroups.filter(admin => admin.admin === 'yes');
            this.userGroups = userGroups.filter(admin => admin.admin === 'no');
            this.ownerGroups.forEach(count => {
              this.apiService.getCountOfCardsOfGroup(count.groupInfo).subscribe(
                cardsCount => {
                  count.cardsCount = cardsCount;
                }
              );
              this.apiService.getCountOfMembersOfGroup(count.groupInfo).subscribe(
                membersCount => {
                  count.membersCount = membersCount;
                }
              );
            });
            this.userGroups.forEach(count => {
              this.apiService.getCountOfCardsOfGroup(count.groupInfo).subscribe(
                cardsCount => {
                  count.cardsCount = cardsCount;
                }
              );
              this.apiService.getCountOfMembersOfGroup(count.groupInfo).subscribe(
                membersCount => {
                  count.membersCount = membersCount;
                }
              );
            });
          }
        );
      }
    );
  }

  callGroup(groupInfo): void {
    this.isGroupCardCalled = true;
    this.isGroupMemberCalled = false;
    this.setSaveGroupInfo(groupInfo);
    this.apiService.getCardsOfGroup(groupInfo).subscribe(
      cards => {
        this.cards = cards;
      }
    );
  }

  goBack(): void {
    this.isGroupCardCalled = false;
    this.isGroupMemberCalled = false;
  }

  goToMembers(): void {
    this.isGroupCardCalled = true;
    this.isGroupMemberCalled = true;
    this.apiService.getUsersOfGroup(this.getSavGroupInfo()).subscribe(
      users => {
        this.usersOfGroups = users;
        this.saveUsersOfGroups = users;
      }
    );
  }

  goToGroupCards(): void {
    this.isGroupCardCalled = true;
    this.isGroupMemberCalled = false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue === '') {
      this.usersOfGroups = this.getSaveUsersOfGroups();
    } else {
      this.usersOfGroups = this.usersOfGroups.filter((x => x.userInfo.email.includes(filterValue) || x.userInfo.username.includes(filterValue)
        || x.userInfo.tribe.includes(filterValue) || x.userInfo.feature.includes(filterValue) || x.admin.includes(filterValue)));
    }
  }

  setSaveGroupInfo(groupInfo) {
    this.saveGroupInfo = groupInfo;
  }

  getSavGroupInfo() {
    return this.saveGroupInfo;
  }

  setSaveUsersOfGroups(usersOfGroups) {
    this.saveUsersOfGroups = usersOfGroups;
  }

  getSaveUsersOfGroups() {
    return this.saveUsersOfGroups;
  }

}
