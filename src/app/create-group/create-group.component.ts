import {Component, OnInit} from '@angular/core';
import {Group} from '../_model/Group';
import {ThovenApiService} from '../_service/thoven-api.service';
import {UserDetails} from '../_model/User';
import {NgForm} from '@angular/forms';
import {UserGroup} from '../_model/UserGroup';
import {JwtTokenClientService} from '../_service/jwt-token-client.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  groupModel = new Group();
  userGroupModel = new UserGroup();
  userList: UserDetails[] = [];
  public value: string[];

  public localFields: Object = {text: 'username', value: 'username'};
  public localWaterMark: string = 'Select group members';

  constructor(private apiService: ThovenApiService, private jwtTokenClientService: JwtTokenClientService) {
  }

  ngOnInit(): void {
    this.apiService.getAllUsers().subscribe(
      data => {
        this.userList = data as UserDetails[];
        this.userList = this.userList.filter(x => x.username != this.jwtTokenClientService.getUsername());
      }
    );
  }

  onSubmitCreateGroup(form: NgForm): void {
    this.apiService.createGroup(this.groupModel).subscribe(group => {
        this.value.push(this.jwtTokenClientService.getUsername());
        this.value.filter(user => {
          this.apiService.getUserInfoByUsername(user).subscribe(userDetail => {
            this.userGroupModel.userInfo = userDetail;
            this.userGroupModel.groupInfo = group;
            this.userGroupModel.admin = user === this.jwtTokenClientService.getUsername() ? 'yes' : 'no';
            this.apiService.createUserGroups(this.userGroupModel).subscribe(userGroup => {
              console.log(userGroup, '**************');
            });
          });
        });
      }
    );
  }

}
