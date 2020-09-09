import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-group-space',
  templateUrl: './group-space.component.html',
  styleUrls: ['./group-space.component.scss']
})
export class GroupSpaceComponent implements OnInit {
  isGroupCardCalled: boolean;
  isGroupMemberCalled: boolean;

  constructor() {
    this.isGroupCardCalled = false;
    this.isGroupMemberCalled = false;
  }

  ngOnInit(): void {
  }

  callGroup(): void {
    this.isGroupCardCalled = true;
    this.isGroupMemberCalled = false;
  }

  goBack(): void {
    this.isGroupCardCalled = false;
    this.isGroupMemberCalled = false;
  }

  goToMembers(): void {
    this.isGroupCardCalled = true;
    this.isGroupMemberCalled = true;
  }

  goToGroupCards(): void {
    this.isGroupCardCalled = true;
    this.isGroupMemberCalled = false;
  }

}
