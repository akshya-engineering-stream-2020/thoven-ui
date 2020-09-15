export class User {
  public userName: string;
  public password: string;
}

export class UserDetails {
  public userInfoId: number;
  public firstName: string;
  public lastName: string;
  public username: string;
  public tribe: string;
  public feature: string;
  public groupInfos: GroupInfoList[];
}

export class GroupInfoList {
  public groupInfoId: number;
  public groupName: string;
  public groupDesp: string;
}
