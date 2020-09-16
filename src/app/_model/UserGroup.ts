import {UserDetails} from './User';
import {Group} from './Group';

export class UserGroup {
  public userGroupInfoId: number;
  public userInfo: UserDetails;
  public groupInfo: Group;
  public admin: string;
  public cardsCount?: number;
  public membersCount?: number;
}
