import {Component, OnInit} from '@angular/core';
import {Group} from '../_model/Group';
import {ThovenApiService} from '../_service/thoven-api.service';
import {UserDetails} from '../_model/User';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  groupModel = new Group();
  userList: UserDetails[] = [];
  public value: string[];

  public localFields: Object = {text: 'username', value: 'userInfoId'};
  public localWaterMark: string = 'Select group members';

  constructor(private apiService: ThovenApiService) {
  }

  ngOnInit(): void {
    this.apiService.getAllUsers().subscribe(
      data => {
        this.userList = data as UserDetails[];
      }
    );
  }

  onSubmitCreateGroup(form: NgForm): void {
  }

}
